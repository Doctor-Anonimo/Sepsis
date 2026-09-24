/* Escalas para el juego. Fuentes y adaptación temporal: ver CALCULADORAS.txt. */
(() => {
  'use strict';
  const n = value => value === null || value === undefined || value === '' || typeof value === 'boolean' ? null : (Number.isFinite(Number(value)) ? Number(value) : null);
  const valid = (value,low,high=Infinity) => {const x=n(value);return x!==null && x>=low && x<=high ? x : null;};
  const fmt = value => value === null ? 'Pendiente' : Number(value.toFixed(2)).toLocaleString('es-CO');
  const component = (name,value,points,max=4,missing='') => ({name,value,min:points??0,max:points??max,known:points!==null,missing});
  function summarize(parts,notes=[]) {
    const min=parts.reduce((s,p)=>s+p.min,0), max=parts.reduce((s,p)=>s+p.max,0);
    const missing=[...new Set(parts.filter(p=>!p.known).map(p=>p.missing||p.name))];
    const ranges=parts.some(p=>p.known && p.min!==p.max);
    return {parts,min,max,complete:missing.length===0&&!ranges,missing,notes,
      label:missing.length ? `${min} parcial` : ranges ? `${min}–${max}` : String(min)};
  }
  function news(v,context={}) {
    const rr=valid(v.RR,1),spo=valid(v.SpO2,0,100),sbp=valid(v.SBP,1),hr=valid(v.HR,1),temp=valid(v.Temp,20,50),gcs=valid(v.GCS,3,15);
    const consciousness=['A','C','V','P','U'].includes(context.consciousness) ? context.consciousness : null;
    const alert=consciousness ? consciousness==='A' : gcs===null ? null : gcs===15;
    const oxygen=typeof context.supplementalOxygen==='boolean' ? context.supplementalOxygen : null;
    const parts=[
      component('Frecuencia respiratoria',rr===null?'Sin dato':`${rr}/min`,rr===null?null:rr<=8||rr>=25?3:rr>=21?2:rr<=11?1:0,3),
      component('Saturación de oxígeno',spo===null?'Sin dato':`${spo} %`,spo===null?null:spo<=91?3:spo<=93?2:spo<=95?1:0,3),
      component('Oxígeno suplementario',oxygen===null?'Sin dato':oxygen?'Sí':'Aire ambiente',oxygen===null?null:oxygen?2:0,2),
      component('Presión arterial sistólica',sbp===null?'Sin dato':`${sbp} mmHg`,sbp===null?null:sbp<=90||sbp>=220?3:sbp<=100?2:sbp<=110?1:0,3),
      component('Frecuencia cardíaca',hr===null?'Sin dato':`${hr}/min`,hr===null?null:hr<=40||hr>=131?3:hr>=111?2:hr<=50||hr>=91?1:0,3),
      component('Estado de conciencia',consciousness ? ({A:'Alerta',C:'Confusión nueva',V:'Respuesta a la voz',P:'Respuesta al dolor',U:'Sin respuesta'}[consciousness]) : gcs===null?'Sin dato':`Glasgow ${gcs}/15`,alert===null?null:alert?0:3,3),
      component('Temperatura',temp===null?'Sin dato':`${fmt(temp)} °C`,temp===null?null:temp<=35?3:temp>=39.1?2:temp<=36||temp>=38.1?1:0,3)
    ];
    const notes=['Saturación: escala 1. Se recalcula con los signos vitales actuales.'];
    if(!consciousness)notes.push('El juego aproxima el estado de conciencia con Glasgow: 15 = alerta; menos de 15 = alterado.');
    if(context.assumedAir)notes.push('Este caso usa aire ambiente como condición inicial de la simulación.');
    return summarize(parts,notes);
  }
  function cardiovascular(map,pressors) {
    let low=map===null?0:map<70?1:0,high=map===null?1:low;
    let hasPressor=false;const names=[],unknown=[];
    for(const p of pressors) {
      if(!['norepinephrine','epinephrine','dopamine','dobutamine'].includes(p.id))continue;
      const dose=valid(p.dose,0), name={norepinephrine:'Noradrenalina',epinephrine:'Adrenalina',dopamine:'Dopamina',dobutamine:'Dobutamina'}[p.id];
      if(dose===0)continue;
      hasPressor=true;let a,b;
      if(p.id==='dobutamine')a=b=2;
      else if(dose===null){a=p.id==='dopamine'?2:3;b=4;unknown.push(name);}
      else a=b=p.id==='dopamine'?(dose>15?4:dose>5?3:2):(dose>.1?4:3);
      low=Math.max(low,a);high=Math.max(high,b);
      names.push(name+(dose===null?' (dosis no definida)':` ${fmt(dose)} μg/kg/min`));
    }
    const row={name:'Cardiovascular',value:[map===null?'PAM pendiente':`PAM ${fmt(map)} mmHg`,...names].join(' · '),min:low,max:high,known:map!==null||hasPressor,missing:'Presión arterial'};
    return {row,unknown};
  }
  const labNames={pao2:['Gasometría arterial: presión de oxígeno (PaO₂)','ABG O2'],platelets:['Hemograma: plaquetas','CBC Platelet'],bilirubin:['Bilirrubina total','LFT Total Bilirubin'],creatinine:['Creatinina','BMP Creatinine']};
  function latest(patient,key) {
    for(let i=patient.labs.length-1;i>=0;i--){
      const lab=patient.labs[i];if(lab.left>0)continue;
      const row=lab.rows.find(r=>r.analyte===key||labNames[key].includes(r.name));
      if(row)return {value:n(row.value)??n(row.actual),unit:row.unit||'',context:lab.context||{},time:lab.sampleTime};
    }
    return null;
  }
  function labNumber(lab,type) {
    if(!lab || lab.value===null || lab.value<0)return null;
    const unit=lab.unit.replaceAll('μ','u').replaceAll('µ','u').replaceAll('×','x').replaceAll(' ','').toLowerCase();
    if(type==='pao2'){if(unit==='kpa')return lab.value*7.50062;return unit==='mmhg'?lab.value:null;}
    if(type==='platelets')return ['x10^3/ul','10^3/ul','x10^9/l','10^9/l'].includes(unit)?lab.value:['/ul','cells/ul'].includes(unit)?lab.value/1000:null;
    if(unit==='mg/dl')return lab.value;
    if(unit==='umol/l')return lab.value/(type==='creatinine'?88.4:17.1);
    return null;
  }
  function sofa(v,patient,context={}) {
    const pa=latest(patient,'pao2'),plt=latest(patient,'platelets'),bili=latest(patient,'bilirubin'),creat=latest(patient,'creatinine');
    const pao2=labNumber(pa,'pao2'),platelets=labNumber(plt,'platelets'),bilirubin=labNumber(bili,'bilirubin'),creatinine=labNumber(creat,'creatinine');
    const fio2=valid(pa?.context.fio2??context.fio2,.21,1);
    const support=pa?.context.respiratorySupport??context.respiratorySupport;
    const ratio=pao2!==null&&fio2!==null?pao2/fio2:null;
    let respiratory=component('Respiratorio',ratio===null?'PaO₂/FiO₂ pendiente':`PaO₂/FiO₂ ${fmt(ratio)} · FiO₂ ${fmt(fio2*100)} %`,ratio===null?null:ratio<300?2:ratio<400?1:0,4,'Gasometría arterial / FiO₂');
    if(ratio!==null&&ratio<200){
      if(support===true)respiratory.min=respiratory.max=ratio<100?4:3;
      else if(support!==false){respiratory.max=ratio<100?4:3;respiratory.known=false;respiratory.missing='Tipo de soporte respiratorio';}
    }
    const sbp=valid(v.SBP,1),dbp=valid(v.DBP,1),map=sbp!==null&&dbp!==null?(sbp+2*dbp)/3:null;
    const cv=cardiovascular(map,patient.treatments.filter(t=>t.left>0).map(t=>({id:t.id,dose:t.sofaDose})));
    const gcs=valid(v.GCS,3,15),uo=valid(v['Urine Out'],0),weight=valid(v.Weight,.1);
    const documentedUrine=valid(context.urine24h,0);
    const urine= documentedUrine!==null ? documentedUrine : uo!==null&&weight!==null?uo*weight*24:null;
    const crScore=creatinine===null?null:creatinine>=5?4:creatinine>=3.5?3:creatinine>=2?2:creatinine>=1.2?1:0;
    const uScore=urine===null?null:urine<200?4:urine<500?3:0;
    const renalKnown=crScore!==null&&uScore!==null || crScore===4 || uScore===4;
    const renalMin=Math.max(crScore??0,uScore??0);
    const renal={name:'Renal',value:`Creatinina: ${fmt(creatinine)}${creatinine!==null?' mg/dL':''} · Diuresis: ${fmt(urine)}${urine!==null?' mL/24 h':''}${documentedUrine===null&&urine!==null?' (proyección)':''}`,min:renalMin,max:renalKnown?renalMin:4,known:renalKnown,missing:creatinine===null?'Creatinina del panel metabólico':'Diuresis / peso'};
    const parts=[respiratory,
      component('Coagulación',platelets===null?'Plaquetas pendientes':`${fmt(platelets)} ×10³/μL`,platelets===null?null:platelets<20?4:platelets<50?3:platelets<100?2:platelets<150?1:0,4,'Hemograma: plaquetas'),
      component('Hepático',bilirubin===null?'Bilirrubina pendiente':`${fmt(bilirubin)} mg/dL`,bilirubin===null?null:bilirubin>=12?4:bilirubin>=6?3:bilirubin>=2?2:bilirubin>=1.2?1:0,4,'Panel metabólico: bilirrubina'),cv.row,
      component('Neurológico',gcs===null?'Glasgow pendiente':`Glasgow ${gcs}/15`,gcs===null?null:gcs<6?4:gcs<=9?3:gcs<=12?2:gcs<=14?1:0),renal];
    const notes=['SOFA del momento: combina los signos actuales con la última muestra disponible de cada estudio. Repita los paraclínicos para actualizar esos componentes.'];
    if(documentedUrine===null&&urine!==null)notes.push('Diuresis de 24 horas proyectada desde la diuresis actual y el peso. El juego no equivale a un registro clínico de las peores cifras de 24 horas.');
    if(cv.unknown.length)notes.push(`Falta la dosis de ${cv.unknown.join(', ')}: se muestra el intervalo de puntos posible. El soporte activo se cuenta al aplicarlo en el juego.`);
    if(context.assumedAir)notes.push('Condición del caso: aire ambiente, FiO₂ del 21 % y sin soporte respiratorio.');
    return summarize(parts,notes);
  }
  globalThis.EscalasSeptris={news,sofa};
})();

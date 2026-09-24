(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const escape = s => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const labels = {'Physical Exam':'Examen físico',Labs:'Laboratorios',Imaging:'Imágenes',Treat:'Tratar',Consult:'Consultar',Cultures:'Cultivos',Back:'Atrás',UA:'Uroanálisis',Lactate:'Lactato',CBC:'Hemograma',CMP:'Panel metabólico',ABG:'Gasometría arterial',Troponins:'Troponinas','DIC Panel':'Panel de CID','Chest X-Ray':'Radiografía de tórax',EKG:'ECG','Chest CT':'TC de tórax','Abdominal CT':'TC abdominal',Echocardiogram:'Ecocardiograma',Antibiotics:'Antibióticos',Fluids:'Líquidos',Pressors:'Vasopresores',Aspirin:'Aspirina',Heparin:'Heparina','Chest Tube Placement':'Tubo de tórax','Remove Central Line':'Retirar catéter central','ICU Transfer':'Traslado a UCI',Revascularize:'Revascularización','Interventional Radiology':'Radiología intervencionista','GI-ERCP':'CPRE',Surgery:'Cirugía','Blood Cultures':'Hemocultivos','Urine Cultures':'Urocultivo','A Good Treatment':'Tratamiento adecuado','A Bad Treatment':'Tratamiento inadecuado','A Healing Treatment':'Tratamiento curativo'};
  Object.assign(labels, {Cefazolin:'Cefazolina',Ceftriaxone:'Ceftriaxona',Cefepime:'Cefepima',Vancomycin:'Vancomicina',Meropenem:'Meropenem','Piperacillin-tazobactam (Zosyn)':'Piperacilina/tazobactam (Zosyn)',Levofloxacin:'Levofloxacina','D5 1/2 NS 500ml Bolus':'Bolo de 500 mL: glucosa al 5 % + NaCl al 0,45 %','IV NS, 500 ml Bolus':'Solución salina al 0,9 %: bolo IV de 500 mL','IV NS, 1000 ml Bolus':'Solución salina al 0,9 %: bolo IV de 1000 mL',Norepinephrine:'Noradrenalina',Dopamine:'Dopamina',Dobutamine:'Dobutamina'});
  const label = x => labels[x.trim()] || x.trim();
  const numeric = x => String(x ?? '—').replace(/^(\d+)\.(\d+)$/, '$1,$2');
  let game = null, selected = null, menu = 'TopMenu', entering = false, last = 0, painted = 0, noticeTimer;
  let pending = [], focusBeforeModal = null;
  const modal = $('#modal-informativo'), pause = $('#menu-pausa');
  function message(text) {
    $('#aviso').textContent = text; $('#aviso').classList.add('visible');
    clearTimeout(noticeTimer); noticeTimer = setTimeout(()=>$('#aviso').classList.remove('visible'),5000);
  }
  function freeze() {if(game) game.paused = modal.open || pause.open || document.hidden;}
  function openModal(html) {
    focusBeforeModal = document.activeElement;
    $('#contenido-modal').innerHTML = html;
    if(!modal.open) modal.showModal();
    modal.scrollTop = 0; freeze();
  }
  function nextFeedback() {
    if (modal.open || pause.open || !pending.length) return;
    const e = pending.shift();
    const q = e.tip.quiz && e.patient.data.quizzes?.find(x=>x.id === e.tip.quiz);
    const quiz = q && !e.patient.quizzes.has(q.id) ? q : null;
    openModal(`${SALUDO_SEPTRIS}<h2>${escape(e.patient.data.name)}</h2><p>${escape(e.tip.response)}</p><p><strong>Puntos: ${e.points > 0 ? '+' : ''}${e.points}</strong></p>${quiz ? '<h3>Pregunta del caso</h3><p>'+escape(quiz.question)+'</p><div class="respuestas">'+quiz.answers.map((a,i)=>'<button data-respuesta="'+i+'">'+escape(a.text)+'</button>').join('')+'</div><p id="respuesta-quiz" role="status"></p>' : ''}<button id="continuar-comentario" class="boton-continuar">Continuar</button>`);
    if(quiz) document.querySelectorAll('[data-respuesta]').forEach(button=>button.onclick=()=>{
      const answer = game.answer(e.patient,quiz,Number(button.dataset.respuesta));
      if(!answer) return;
      $('#respuesta-quiz').textContent = answer.response;
      document.querySelectorAll('[data-respuesta]').forEach(b=>b.disabled=true);
      $('#puntaje').textContent = game.score;
    });
    $('#continuar-comentario').onclick = ()=>modal.close();
  }
  modal.addEventListener('close',()=>{freeze();focusBeforeModal?.focus();if(pending.length) nextFeedback();});
  $('#cerrar-modal').onclick = ()=>modal.close();
  function scoreDetails(kind) {
    if(!game || !selected)return '<p class="sin-datos-escala">Selecciona un paciente para ver su cálculo.</p>';
    const score=game.scales(selected)[kind];
    return `<section class="detalle-escala"><h2>${kind.toUpperCase()} de ${escape(selected.data.name)}: <span>${escape(score.label)}</span></h2><div class="tabla-escala"><table><thead><tr><th>Componente</th><th>Dato utilizado</th><th>Puntos</th></tr></thead><tbody>${score.parts.map(p=>`<tr><th scope="row">${escape(p.name)}</th><td>${escape(p.value)}</td><td>${p.known ? p.min===p.max?p.min:p.min+'–'+p.max : p.min>0?'≥'+p.min:'—'}</td></tr>`).join('')}</tbody><tfoot><tr><th colspan="2">${score.complete?'Total':'Total disponible'}</th><td>${escape(score.label)}</td></tr></tfoot></table></div>${score.missing.length?'<p class="pendientes-escala"><strong>Falta:</strong> '+escape(score.missing.join('; '))+'.</p>':''}<ul class="notas-escala">${score.notes.map(note=>'<li>'+escape(note)+'</li>').join('')}</ul></section>`;
  }
  function showHelp(kind){openModal(SALUDO_SEPTRIS+(['news','sofa'].includes(kind)?scoreDetails(kind):'')+CONTENIDOS[kind]);}
  document.querySelectorAll('[data-modal]').forEach(b=>b.onclick=()=>showHelp(b.dataset.modal));
  $('#signos-vitales').addEventListener('click',e=>{const b=e.target.closest('[data-escala]');if(b)showHelp(b.dataset.escala);});
  function tab(name) {
    $('#vista-cuadro').classList.toggle('oculto',name !== 'cuadro');
    $('#vista-historia').classList.toggle('oculto',name !== 'historia');
    document.querySelectorAll('[data-pestana]').forEach(b=>b.classList.toggle('activa',b.dataset.pestana === name));
  }
  document.querySelectorAll('[data-pestana]').forEach(b=>b.onclick=()=>tab(b.dataset.pestana));
  function showMenu(name) {
    menu = name;
    const menus = game?.tutorial ? MENUS_TUTORIAL : MENUS_ORIGINALES;
    const top = $('.acciones-principales'), sub = $('#submenu');
    top.classList.toggle('oculto',name !== 'TopMenu'); sub.classList.toggle('oculto',name === 'TopMenu');
    const host = name === 'TopMenu' ? top : sub;
    host.replaceChildren();
    for(const a of menus[name] || []) {
      const b = document.createElement('button'); b.textContent = label(a.text.trim());
      if(a.image) {
        const icon = document.createElement('img'); icon.src = 'img/'+a.image; icon.alt = '';
        b.prepend(icon);
      }
      if(game?.tutorial && !a.submenu && (!selected || !selected.unlocked.has(a.text))) {
        b.disabled = true; b.title = 'Seleccione al paciente y complete el paso anterior.';
      }
      b.onclick = ()=>{
        if(a.submenu) {showMenu(a.submenu); return;}
        if(!selected || selected.state !== 'active') {message('Primero seleccione un paciente.'); return;}
        const error = game.act(selected,a);
        if(error) {message(error); return;}
        message(label(a.text.trim())+' · '+selected.data.name);
        tab('cuadro'); showMenu(menu); render(); consume();
      };
      host.append(b);
    }
    host.style.gridTemplateColumns = `repeat(${name === 'TopMenu' ? menus[name].length : Math.min(7,menus[name]?.length || 1)}, minmax(0,1fr))`;
  }
  function render() {
    if(!game) return;
    $('#puntaje').textContent = game.score;
    $('#progreso').textContent = `${game.finished.length}/${game.total} resueltos${game.tutorial ? ' · Tutorial' : ''}`;
    const area = $('#pacientes');
    for(const card of [...area.children]) if(!game.patients.some(p=>p.data.name === card.dataset.name)) card.remove();
    for(const p of game.patients) {
      let card = [...area.children].find(c=>c.dataset.name === p.data.name);
      if(!card) {
        card = document.createElement('button'); card.className = 'tarjeta-paciente'; card.dataset.name = p.data.name;
        card.innerHTML = '<img alt=""><span></span>';
        card.onclick = ()=>{
          if(p.state !== 'active') return;
          selected = p; tab('historia'); render(); showMenu(menu);
          if(game.tutorial && !p.exam) message('Tutorial: revise la HC y pulse «Examen físico». Los siguientes pasos se habilitarán al avanzar.');
        };
        area.append(card);
      }
      card.classList.toggle('seleccionada',p === selected && p.state === 'active');
      card.classList.toggle('resuelta',p.state !== 'active');
      card.classList.toggle('fallecida',p.state === 'dead');
      card.style.left = (game.patients.length === 1 ? 50 : p.slot === 0 ? 27 : 73)+'%';
      card.style.top = Math.max(0,(area.clientHeight-card.offsetHeight)*(1-p.health/300))+'px';
      const picture = p.state === 'dead' ? p.data.death_picture : p.state === 'healed' ? p.data.healed_picture : p.data.picture;
      const src = 'img/pacientes/'+picture;
      if(card.querySelector('img').getAttribute('src') !== src) card.querySelector('img').src = src;
      card.querySelector('span').textContent = game.tutorial ? 'Práctica' : p.data.name;
      card.disabled = p.state !== 'active';
      card.setAttribute('aria-label',`${p.data.name}: salud simulada ${Math.round(p.health)}/300${p === selected ? ', seleccionado' : ''}`);
    }
    if(selected?.state !== 'active') selected = null;
    $('#nombre-paciente').textContent = selected ? selected.data.name : 'Seleccione un paciente';
    const v = selected ? game.vitals(selected) : {};
    const scales=selected?game.scales(selected):null;
    const vitals = [`Temp.: ${numeric(v.Temp)} °C`,`PA: ${v.SBP ?? '—'}/${v.DBP ?? '—'}`,`FC: ${v.HR ?? '—'}`,`FR: ${v.RR ?? '—'}`,`SpO₂: ${v.SpO2 ?? '—'} %`,`DU: ${numeric(v['Urine Out'])}`];
    const focusedScale=document.activeElement?.dataset.escala;
    $('#signos-vitales').innerHTML = vitals.map(s=>'<span>'+escape(s)+'</span>').join('')+['news','sofa'].map(key=>`<button class="valor-escala ${scales&&!scales[key].complete?'escala-parcial':''}" data-escala="${key}" title="Ver cálculo y datos utilizados">${key.toUpperCase()}: ${escape(scales?scales[key].label:'—')}</button>`).join('');
    if(focusedScale)$('#signos-vitales [data-escala="'+focusedScale+'"]').focus({preventScroll:true});
    $('#sin-paciente').classList.toggle('oculto',!!selected);
    $('#historia-paciente').classList.toggle('oculto',!selected);
    if(!selected) {
      for(const id of ['resultado-examen','resultado-laboratorios','resultado-tratamientos']) $('#'+id).textContent = '';
      return;
    }
    const p = selected, h = p.data.history;
    $('#historia-paciente').innerHTML = `<p class="nota-idioma">Hola, chicuelos...</p><p>Sexo: ${p.data.gender === 'Female' ? 'Femenino' : 'Masculino'}</p><p>Edad: ${escape(h.Age)} años</p>`+[['Motivo de consulta','Chief Complaint'],['Enfermedad actual','History of Present Illness'],['Antecedentes','Past Medical Illness']].map(([title,key])=>`<h3>${title}</h3><p>${escape(h[key])}</p>`).join('');
    $('#resultado-examen').innerHTML = p.exam ? p.data.tests.filter(t=>t.labID === 'physicalexam').map(t=>'<p>'+escape(t.result)+'</p>').join('') : 'Examen físico aún no realizado.';
    $('#resultado-laboratorios').innerHTML = p.labs.length ? p.labs.map(l=>`<section><strong>${escape(label(l.name))}</strong>${l.left>0 ? '<p>Pendiente · '+Math.ceil(l.left)+' s</p>' : '<ul>'+l.rows.map(r=>'<li>'+escape(r.name)+': '+escape(numeric(r.value))+' '+escape(r.unit)+'</li>').join('')+'</ul>'}</section>`).join('') : 'No se han solicitado estudios.';
    $('#resultado-tratamientos').innerHTML = p.treatments.length ? '<ul>'+p.treatments.map(t=>'<li>'+escape(label(t.name))+' · '+(t.left>0 ? 'Activo: '+Math.ceil(t.left)+' s' : 'Finalizado')+'</li>').join('')+'</ul>' : 'No se han aplicado tratamientos.';
  }
  function consume() {
    if(!game) return;
    for(const event of game.events.splice(0)) {
      if(event.type === 'feedback') pending.push(event);
      if(event.type === 'end') {
        openModal(`<h2>${game.tutorial ? 'Tutorial completado' : 'Partida finalizada'}</h2><p>Altas: ${game.finished.filter(p=>p.state === 'healed').length} · Fallecimientos: ${game.finished.filter(p=>p.state === 'dead').length}</p><p>Puntaje total: <strong>${game.score}</strong></p><button id="fin-inicio" class="boton-continuar">Volver al inicio</button>`);
        $('#fin-inicio').onclick = reset;
      }
    }
    nextFeedback();
  }
  function start(tutorial) {
    if(entering || game) return;
    entering = true;
    $('#iniciar').disabled = $('#tutorial').disabled = true;
    $('#pantalla-inicio').classList.add('abriendo');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    setTimeout(()=>$('#pantalla-inicio').classList.add('entrando'),reduced ? 0 : 950);
    setTimeout(()=>{
      try {game = new MotorSeptris(tutorial ? [CASO_TUTORIAL] : [...CASOS_ORIGINALES,...CASOS_PERSONALIZADOS],{tutorial});}
      catch(e) {
        entering = false; $('#pantalla-inicio').classList.remove('abriendo','entrando');
        $('#iniciar').disabled = $('#tutorial').disabled = false; message(e.message); return;
      }
      selected = null; entering = false; pending = []; last = performance.now();
      $('#pacientes').replaceChildren();
      $('#pantalla-inicio').classList.add('oculto'); $('#pantalla-juego').classList.remove('oculto'); $('#boton-menu').classList.remove('oculto');
      document.body.classList.add('jugando');
      showMenu('TopMenu'); tab('cuadro'); render(); $('#boton-menu').focus();
      if(tutorial) openModal('<h2>Tutorial</h2><p>Seleccione el retrato, lea la historia clínica (HC) y realice el examen físico. Después solicite los estudios habilitados y pruebe los tratamientos del tutorial.</p><p>Este paciente de práctica no empeora por el paso del tiempo. El tratamiento inadecuado lo hará descender y el adecuado lo hará subir.</p><p>Al llegar arriba recibirá el alta; si llega al límite inferior, fallecerá. Cierre esta ventana para empezar.</p>');
    },reduced ? 80 : 1700);
  }
  function reset() {
    pending = []; game = null; selected = null;
    if(modal.open) modal.close(); if(pause.open) pause.close();
    $('#pantalla-juego').classList.add('oculto'); $('#boton-menu').classList.add('oculto');
    document.body.classList.remove('jugando');
    $('#pantalla-inicio').classList.remove('oculto','abriendo','entrando');
    $('#iniciar').disabled = $('#tutorial').disabled = false;
    $('input[value="normal"]').checked = true;
    $('#aviso').classList.remove('visible'); $('#iniciar').focus();
  }
  $('#iniciar').onclick = ()=>start(false); $('#tutorial').onclick = ()=>start(true);
  $('#boton-menu').onclick = ()=>{pause.showModal(); freeze();};
  $('#reanudar').onclick = ()=>pause.close();
  pause.addEventListener('close',()=>{freeze();nextFeedback();});
  $('#volver-inicio').onclick = reset;
  document.querySelectorAll('[name="velocidad"]').forEach(r=>r.onchange=()=>{if(game) game.speed = {lenta:.5,normal:1,rapida:2}[r.value];});
  document.addEventListener('visibilitychange',freeze);
  document.addEventListener('keydown',e=>{if(e.key === 'Escape' && game && !modal.open && !pause.open){e.preventDefault();pause.showModal();freeze();}});
  function frame(now) {
    const delta = last ? Math.min((now-last)/1000,.25) : 0; last = now;
    if(game) {freeze(); game.tick(delta); consume(); if(now-painted>80) {render(); painted=now;}}
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

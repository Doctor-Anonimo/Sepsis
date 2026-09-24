/* Motor local: salud 0..300, tiempos en segundos simulados; sin red ni almacenamiento. */
(() => {
  'use strict';
  const number = x => typeof x === 'number' && Number.isFinite(x);
  const score = x => Number.isFinite(Number(x)) ? Number(x) : 0;
  const alias = id => {
    const key = id.trim().toLowerCase();
    return {'piperacilline/tazobactam (zosyn)':'zosyn','piperacillin/tazobactam':'zosyn',cepefime:'cefepime'}[key] || key;
  };
  function valor(row, health) {
    if (row.result) return row.result;
    const h = Math.max(0, Math.min(300, health));
    const low = h >= 200 ? 200 : h >= 100 ? 100 : 0;
    const a = row['at' + low], b = row['at' + (low + 100)];
    if (!number(a) || !number(b)) return a ?? 'Sin dato';
    const v = a + (b - a) * (h - low) / 100;
    return row.type?.startsWith('decimal') ? v.toFixed(Number(row.type.slice(7))) : Math.round(v);
  }
  function actual(row,health) {
    if(row.result)return Number.isFinite(Number(row.result))?Number(row.result):null;
    const h=Math.max(0,Math.min(300,health)),low=h>=200?200:h>=100?100:0;
    const a=row['at'+low],b=row['at'+(low+100)];
    return number(a)&&number(b)?a+(b-a)*(h-low)/100:null;
  }
  class MotorSeptris {
    constructor(cases, {tutorial = false, random = Math.random} = {}) {
      if (!cases.length || new Set(cases.map(c => c.name)).size !== cases.length) throw Error('Se requieren casos con nombres únicos.');
      this.tutorial = tutorial;
      this.bank = JSON.parse(JSON.stringify(cases));
      if (!tutorial) for (let i = this.bank.length - 1; i > 0; i--) {const j = Math.floor(random() * (i + 1)); [this.bank[i], this.bank[j]] = [this.bank[j], this.bank[i]];}
      this.bank = this.bank.slice(0, tutorial ? 1 : 10);
      this.total = this.bank.length; this.next = 0; this.score = 0;
      this.patients = []; this.finished = []; this.events = [];
      this.paused = false; this.speed = 1; this.ended = false;
      this.admit(0);
    }
    admit(slot) {
      if (this.next >= this.bank.length) return;
      const data = this.bank[this.next++];
      this.patients.push({data, slot, health:data.health, state:'active', elapsed:0, support:{...(data.scoreContext||{})}, labs:[], treatments:[], combos:[], exam:false, fluids:0, rewards:new Set(), quizzes:new Set(), unlocked:new Set(['Physical Exam']), exitTime:1.2});
    }
    feedback(p, tip, key) {
      if (!tip || p.rewards.has(key)) return;
      p.rewards.add(key); this.score += score(tip.score);
      if (tip.response || tip.quiz) this.events.push({type:'feedback', patient:p, tip, points:score(tip.score)});
    }
    active(p) {return p.treatments.filter(t => t.left > 0);}
    comboActive(p, c) {
      const ids = this.active(p).map(t => t.id);
      // Campos vacíos del archivo no equivalen a una combinación gratuita.
      const comboIds = [...new Set(c.ids.map(alias).filter(Boolean))];
      const required = Number(c.number) > 0 ? Number(c.number) : comboIds.length;
      return required > 0 && comboIds.filter(id => ids.includes(id)).length >= required;
    }
    act(p, action) {
      if (!p || p.state !== 'active' || this.ended || this.paused) return 'Seleccione un paciente activo.';
      if (this.tutorial && !p.unlocked.has(action.text)) return 'Complete primero el paso anterior del tutorial.';
      if (action.lab === 'physicalexam') p.exam = true;
      else if (action.lab) {
        if (p.labs.some(l => l.id === action.lab && l.left > 0)) return 'Este estudio ya está pendiente.';
        const rows = p.data.tests.filter(t => t.labID === action.lab);
        if (!rows.length) return 'Este caso no contiene resultados para ese estudio.';
        p.labs.push({id:action.lab, name:action.text, left:action.duration || 0, health:p.health, sampleTime:p.elapsed, context:{...p.support}, rows:rows.map(r => ({name:r.name, analyte:r.analyte, actual:actual(r,p.health), value:valor(r,p.health), unit:r.unit}))});
        this.feedback(p, rows[0].tip, 'lab:' + action.lab);
      } else if (action.treatment) {
        const rule = p.data.treatments.find(t => t.id === action.treatment);
        if (!rule) return 'No hay una regla definida para este tratamiento en el caso.';
        if (this.active(p).some(t => t.id === action.treatment)) return 'Este tratamiento ya está activo.';
        if (action.usesperpatient && p.treatments.filter(t => t.id === action.treatment).length >= action.usesperpatient) return 'Se alcanzó el límite de usos para este paciente.';
        const fluids = {d5halfnormalsaline500cc:.5, ivnormalsaline500ml:.5, ivnormalsaline1000ml:1};
        if (fluids[action.treatment]) {
          if (this.active(p).some(t => fluids[t.id])) return 'Espere a que termine la infusión en curso.';
          if (p.fluids + fluids[action.treatment] > 3) return 'Límite de líquidos de esta simulación: 3 L por paciente.';
          p.fluids += fluids[action.treatment];
        }
        p.treatments.push({id:action.treatment, name:action.text, left:action.duration || 1, sofaDose:action.sofaDose??rule.sofaDose??null, rule});
        const tip = p.health <= 100 && rule.below100 ? rule.below100 : p.health <= 200 && rule.below200 ? rule.below200 : rule.below300;
        this.feedback(p,tip,'treatment:'+action.treatment+':'+(tip === rule.below100 ? 100 : tip === rule.below200 ? 200 : 300));
        for (const [i,c] of p.data.combos.entries()) if (!p.combos.some(v => v.index === i) && this.comboActive(p,c)) {
          p.combos.push({index:i, rule:c, health:p.health}); this.feedback(p,c,'combo:'+i);
        }
      }
      for (const name of action.unlock || []) p.unlocked.add(name);
      return '';
    }
    change(p) {
      let effect = -score(p.data.healthRate);
      for (const t of this.active(p)) {
        const r = t.rule;
        effect += p.health <= 100 && number(r.valueBelow100) ? r.valueBelow100 : p.health <= 200 && number(r.valueBelow200) ? r.valueBelow200 : score(r.value);
      }
      for (const c of p.combos) if (this.comboActive(p,c.rule)) {
        effect += c.health < 100 && c.rule.below100 ? score(c.rule.below100) : c.health < 200 && c.rule.below200 ? score(c.rule.below200) : score(c.rule.value);
      }
      return effect;
    }
    tick(seconds) {
      if (this.paused || this.ended || !(seconds > 0)) return;
      let remaining = seconds * this.speed;
      while (remaining > 0 && !this.ended) {
        const dt = Math.min(remaining, .05); remaining -= dt;
        for (const p of [...this.patients]) {
          if (p.state !== 'active') {
            p.exitTime -= dt;
            if (p.exitTime <= 0) {
              this.patients = this.patients.filter(x => x !== p);
              this.admit(p.slot);
              if (!this.tutorial && this.patients.length < 2) this.admit(p.slot === 0 ? 1 : 0);
            }
            continue;
          }
          // Partir el paso en el siguiente vencimiento evita prolongar un tratamiento.
          p.elapsed += dt;
          const soon = Math.min(dt,...this.active(p).map(t=>t.left));
          p.health = Math.max(0,Math.min(300,p.health + this.change(p) * soon));
          for (const t of p.treatments) t.left = Math.max(0,t.left - soon);
          if (soon < dt) {
            p.health = Math.max(0,Math.min(300,p.health + this.change(p) * (dt-soon)));
            for (const t of p.treatments) t.left = Math.max(0,t.left - (dt-soon));
          }
          for (const l of p.labs) l.left = Math.max(0,l.left - dt);
          if (p.health <= 0 || p.health >= 300) {
            p.state = p.health <= 0 ? 'dead' : 'healed'; this.finished.push(p);
            this.feedback(p,p.state === 'dead' ? p.data.death_tip : p.data.healed_tip,'outcome');
            this.events.push({type:'outcome',patient:p});
          }
        }
        if (!this.patients.length && this.next >= this.total) {this.ended = true; this.events.push({type:'end'});}
        // La interfaz abrirá el comentario antes de consumir más tiempo.
        if (this.events.some(e => e.type === 'feedback')) break;
      }
    }
    answer(p, quiz, index) {
      if (p.quizzes.has(quiz.id) || !quiz.answers[index]) return null;
      p.quizzes.add(quiz.id);
      const result = quiz.answers[index]; this.score += score(result.score); return result;
    }
    vitals(p) {return Object.fromEntries(p.data.vitals.map(row => [row.name,valor(row,p.health)]));}
    scales(p) {const v=this.vitals(p);return {news:EscalasSeptris.news(v,p.support),sofa:EscalasSeptris.sofa(v,p,p.support)};}
  }
  globalThis.MotorSeptris = MotorSeptris;
})();

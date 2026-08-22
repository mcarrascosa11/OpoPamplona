import { PREGUNTAS } from '../src/data/preguntas.js';
import { RESUMENES } from '../src/data/resumenes.js';
import { temaTitulo } from '../src/data/temas.js';
import fs from 'fs';

const MARGEN = 0.10;
const UMBRAL_VISIBLE = 25;
const UMBRAL_LETRA = 45;
const MIN_PREGUNTAS = 8;

function mide(qs) {
  const n = qs.length;
  const pos = [0,0,0,0];
  let masLarga=0, visible=0, ratio=0, sumEnun=0;
  for (const q of qs) {
    const L = q.o.map(x=>x.length);
    const orden = [...L].sort((a,b)=>b-a);
    if (L[q.c]===orden[0] && L.filter(x=>x===orden[0]).length===1) {
      masLarga++;
      if ((orden[0]-orden[1])/orden[1] > MARGEN) visible++;
    }
    ratio += L[q.c]/(L.filter((_,i)=>i!==q.c).reduce((a,b)=>a+b,0)/3);
    pos[q.c]++;
    sumEnun += q.q.length;
  }
  return {n, larga:(100*masLarga)/n, visible:(100*visible)/n, ratio:ratio/n, letra:(100*Math.max(...pos))/n, pos, enun:sumEnun/n};
}

function analizaResumen(key) {
  const r = RESUMENES[key];
  if (!r) return {estado:'EN BLANCO', tiene:false, notas:0, items:0, citas:0, claves:0};
  const bloques = r.bloques || [];
  const notas = bloques.filter(b=>b.nota && b.nota.trim()).length;
  const items = bloques.reduce((a,b)=>a+(b.items||[]).length,0);
  const citas = bloques.reduce((a,b)=>a+(b.items||[]).filter(it=>/\bart\b|artículo|arts\.|art\./i.test(it)).length,0);
  const claves = (r.claves||[]).length;
  const pctNotas = bloques.length ? notas/bloques.length : 0;

  let estado;
  if (pctNotas === 0 || claves < 5) estado = 'MALO';
  else if (pctNotas >= 0.5 && claves >= 7) estado = 'BUENO';
  else estado = 'MEJORABLE';

  return {estado, tiene:true, notas, items, citas, claves, pctNotas};
}

function analizaPreguntas(key, qs) {
  if (!qs || qs.length===0) return {estado:'SIN PREGUNTAS', n:0, visible:0, ratio:0, pos:'-'};
  const m = mide(qs);
  const fiable = m.n >= MIN_PREGUNTAS;
  if (fiable && (m.visible > UMBRAL_VISIBLE || m.letra > UMBRAL_LETRA)) return {estado:'A REVISAR', ...m};
  if (fiable && m.visible > 15) return {estado:'REGULARES', ...m};
  if (!fiable) return {estado:'POCAS', ...m};
  return {estado:'OK', ...m};
}

const porTema = {};
for (const q of PREGUNTAS) {
  if (!porTema[q.tema]) porTema[q.tema] = [];
  porTema[q.tema].push(q);
}

const orden = [];
for (let i=1;i<=13;i++) orden.push('G'+i);
for (let i=1;i<=59;i++) orden.push('E'+i);

const rows = orden.map(key => {
  const res = analizaResumen(key);
  const preg = analizaPreguntas(key, porTema[key]||[]);
  return {key, titulo: temaTitulo(key), res, preg};
});

function chip(estado, tipo) {
  const mapa = {
    'BUENO':       ['good','Bueno'],
    'MEJORABLE':   ['ok','Mejorable'],
    'MALO':        ['bad','Malo'],
    'EN BLANCO':   ['blank','En blanco'],
    'FALTA RESUMEN': ['warn','Falta resumen'],
    'OK':          ['good','OK'],
    'REGULARES':   ['ok','Regulares'],
    'A REVISAR':   ['bad','A revisar'],
    'POCAS':       ['warn','Pocas'],
    'SIN PREGUNTAS': ['blank','Sin preg.']
  };
  return mapa[estado] || ['neutral', estado];
}

function estadoGlobal(r, p) {
  // Prioriza el problema más actionable.
  if (!r.tiene && p.n === 0) return 'EN BLANCO';
  if (!r.tiene) return 'FALTA RESUMEN';
  if (r.estado === 'MALO') return 'MALO';
  if (p.estado === 'A REVISAR') return 'A REVISAR';
  if (p.estado === 'REGULARES' || r.estado === 'MEJORABLE') return 'REGULARES';
  if (p.estado === 'POCAS') return 'POCAS';
  return 'OK';
}

const conteoGlobal = {};
for (const r of rows) {
  const g = estadoGlobal(r.res, r.preg);
  conteoGlobal[g] = (conteoGlobal[g]||0)+1;
}

const statusOrderGlobal = ['EN BLANCO','FALTA RESUMEN','MALO','A REVISAR','POCAS','REGULARES','OK'];
const globalCards = statusOrderGlobal.filter(s=>conteoGlobal[s]).map(s=>{
  const [cls,label] = chip(s);
  return `<div class="card ${cls}"><span class="card-num">${conteoGlobal[s]}</span><span class="card-label">${label}</span></div>`;
}).join('');

const tableRows = rows.map(r=>{
  const [rCls, rLbl] = chip(r.res.estado);
  const [pCls, pLbl] = chip(r.preg.estado);
  const g = estadoGlobal(r.res, r.preg);
  const [gCls, gLbl] = chip(g);
  const pos = Array.isArray(r.preg.pos) ? r.preg.pos.join('/') : '-';
  return `<tr data-key="${r.key}" data-res="${r.res.estado}" data-preg="${r.preg.estado}" data-global="${g}">
    <td class="tema">${r.key}</td>
    <td class="hecho"><input type="checkbox" data-tema="${r.key}" aria-label="Marcar ${r.key} como hecho"></td>
    <td class="titulo">${r.titulo}</td>
    <td><span class="chip ${gCls}">${gLbl}</span></td>
    <td><span class="chip ${rCls}">${rLbl}</span></td>
    <td><span class="chip ${pCls}">${pLbl}</span></td>
    <td class="num">${r.preg.n || '-'}</td>
    <td class="num">${r.preg.n ? Math.round(r.preg.visible)+'%' : '-'}</td>
    <td class="num">${r.preg.ratio ? r.preg.ratio.toFixed(2) : '-'}</td>
    <td class="num">${pos}</td>
    <td class="num">${r.res.notas}/${r.res.items}</td>
    <td class="num">${r.res.claves}</td>
  </tr>`;
}).join('');

function listBy(targetGlobal) {
  return rows.filter(r=>estadoGlobal(r.res,r.preg)===targetGlobal).map(r=>r.key).join(', ') || 'ninguno';
}

const bloquesTexto = statusOrderGlobal.map(s=>`- **${chip(s)[1]}** (${conteoGlobal[s]||0}): ${listBy(s)}`).join('\n');

const html = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Mapa del temario</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;700&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #f8f7f5;
      --surface: #ffffff;
      --text: #1e1d1b;
      --muted: #5c5a56;
      --border: #dcd9d3;
      --accent: #4a6fa5;
      --good-bg: #e6f4ea;
      --good-text: #1a7f4e;
      --ok-bg: #fbf6dd;
      --ok-text: #7a6a2d;
      --warn-bg: #fff3e0;
      --warn-text: #b45309;
      --bad-bg: #fdecea;
      --bad-text: #b91c1c;
      --blank-bg: #f0f0f0;
      --blank-text: #6b6b6b;
      --shadow: 0 1px 2px rgba(30,29,27,0.06);
    }
    @media (prefers-color-scheme: dark) {
      :root:not([data-theme="light"]) {
        --bg: #181817;
        --surface: #22221f;
        --text: #eae9e6;
        --muted: #a8a69e;
        --border: #3d3c37;
        --accent: #7fa3d3;
        --good-bg: #143821;
        --good-text: #58d498;
        --ok-bg: #3d3618;
        --ok-text: #e8d96a;
        --warn-bg: #3d2408;
        --warn-text: #f5b869;
        --bad-bg: #3b1110;
        --bad-text: #ff8a84;
        --blank-bg: #2a2a28;
        --blank-text: #9a9893;
        --shadow: 0 1px 3px rgba(0,0,0,0.35);
      }
    }
    :root[data-theme="dark"] {
      --bg: #181817;
      --surface: #22221f;
      --text: #eae9e6;
      --muted: #a8a69e;
      --border: #3d3c37;
      --accent: #7fa3d3;
      --good-bg: #143821;
      --good-text: #58d498;
      --ok-bg: #3d3618;
      --ok-text: #e8d96a;
      --warn-bg: #3d2408;
      --warn-text: #f5b869;
      --bad-bg: #3b1110;
      --bad-text: #ff8a84;
      --blank-bg: #2a2a28;
      --blank-text: #9a9893;
      --shadow: 0 1px 3px rgba(0,0,0,0.35);
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: 'Source Sans 3', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.5;
    }
    header {
      padding: 2rem 1.5rem 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      font-family: 'Bitter', Georgia, serif;
      font-size: 1.75rem;
      margin: 0 0 .25rem;
      letter-spacing: -0.01em;
      text-wrap: balance;
    }
    .subtitle { color: var(--muted); font-size: .95rem; margin: 0; }
    .summary {
      display: flex;
      flex-wrap: wrap;
      gap: .75rem;
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 1.5rem;
    }
    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: .75rem 1rem;
      min-width: 110px;
      box-shadow: var(--shadow);
      display: flex;
      flex-direction: column;
      gap: .15rem;
    }
    .card-num { font-size: 1.6rem; font-weight: 700; }
    .card-label { font-size: .8rem; color: var(--muted); text-transform: uppercase; letter-spacing: .04em; }
    .card.good .card-num { color: var(--good-text); }
    .card.ok .card-num { color: var(--ok-text); }
    .card.warn .card-num { color: var(--warn-text); }
    .card.bad .card-num { color: var(--bad-text); }
    .card.blank .card-num { color: var(--blank-text); }
    .controls {
      max-width: 1200px;
      margin: 0 auto;
      padding: .5rem 1.5rem 1rem;
      display: flex;
      flex-wrap: wrap;
      gap: .5rem;
    }
    button {
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text);
      padding: .4rem .8rem;
      border-radius: 6px;
      cursor: pointer;
      font-family: inherit;
      font-size: .85rem;
      font-weight: 500;
    }
    button:hover { border-color: var(--accent); color: var(--accent); }
    button.active { background: var(--accent); border-color: var(--accent); color: #fff; }
    .table-wrap {
      max-width: 1200px;
      margin: 0 auto 3rem;
      padding: 0 1.5rem;
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: var(--shadow);
      font-size: .9rem;
    }
    thead { background: var(--bg); }
    th, td {
      padding: .65rem .9rem;
      text-align: left;
      border-bottom: 1px solid var(--border);
      white-space: nowrap;
    }
    th {
      font-weight: 600;
      font-size: .78rem;
      text-transform: uppercase;
      letter-spacing: .04em;
      color: var(--muted);
      position: sticky;
      top: 0;
      background: var(--bg);
    }
    td.titulo { white-space: normal; min-width: 260px; }
    td.tema { font-weight: 700; font-variant-numeric: tabular-nums; }
    td.num { font-variant-numeric: tabular-nums; text-align: right; }
    tr.hidden { display: none; }
    .chip {
      display: inline-flex;
      align-items: center;
      padding: .2rem .55rem;
      border-radius: 999px;
      font-size: .78rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: .03em;
    }
    .chip.good { background: var(--good-bg); color: var(--good-text); }
    .chip.ok { background: var(--ok-bg); color: var(--ok-text); }
    .chip.warn { background: var(--warn-bg); color: var(--warn-text); }
    .chip.bad { background: var(--bad-bg); color: var(--bad-text); }
    .chip.blank { background: var(--blank-bg); color: var(--blank-text); }
    .hecho { text-align: center; }
    .hecho input { width: 1.1rem; height: 1.1rem; accent-color: var(--accent); cursor: pointer; }
    tr.hecho td { opacity: 0.55; }
    .counters { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem .5rem; color: var(--muted); font-size: .9rem; font-weight: 600; }
    .legend {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem 1rem;
      color: var(--muted);
      font-size: .85rem;
    }
    .bloques {
      max-width: 1200px;
      margin: 0 auto 2rem;
      padding: 0 1.5rem;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      box-shadow: var(--shadow);
    }
    .bloques ul { margin: 0; padding: 1rem 1.25rem; }
    .bloques li { margin-bottom: .4rem; }
    @media (max-width: 720px) {
      header, .summary, .controls, .table-wrap, .legend, .bloques { padding-left: 1rem; padding-right: 1rem; }
      th, td { padding: .55rem .6rem; }
    }
  </style>
</head>
<body>
  <header>
    <h1>Mapa del temario</h1>
    <p class="subtitle">Oposición de arquitecto · Ayuntamiento de Pamplona · actualizado 22 ago 2026</p>
  </header>
  <section class="summary" aria-label="Resumen">
    ${globalCards}
  </section>
  <section class="controls" aria-label="Filtros">
    <button class="active" data-filter="all">Todos</button>
    <button data-filter="hechos">Hechos</button>
    <button data-filter="pendientes">Pendientes</button>
    <button data-filter="EN BLANCO">En blanco</button>
    <button data-filter="MALO">Resumen malo</button>
    <button data-filter="A REVISAR">Preguntas a revisar</button>
    <button data-filter="MEJORABLE">Mejorable</button>
    <button data-filter="REGULARES">Regulares</button>
    <button data-filter="OK">OK</button>
    <button data-filter="BUENO">Bueno</button>
  </section>
  <p id="counters" class="counters"></p>
  <p class="legend">Visible >10% = % de preguntas donde la opción correcta es claramente más larga. Notas/Items = bloques con explicación / total de puntos. Claves = datos puros memorizables. Marca los temas hechos con el checkbox; se guarda en este navegador.</p>
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Tema</th>
          <th>Hecho</th>
          <th>Título</th>
          <th>Global</th>
          <th>Resumen</th>
          <th>Preguntas</th>
          <th>Nº</th>
          <th>Visible >10%</th>
          <th>Ratio</th>
          <th>a/b/c/d</th>
          <th>Notas/Items</th>
          <th>Claves</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  </div>
  <section class="bloques">
    <ul>
      ${bloquesTexto.split('\n').map(l=>'<li>'+l.replace(/^- \*\*|\*\*/g,'').replace(/\*\*/g,'<strong>').replace(/<strong>([^<]+)<\/strong>/g,'<strong>$1</strong>')+'</li>').join('')}
    </ul>
  </section>
  <script>
    const STORAGE_KEY = 'opoTemasHechos';
    const buttons = document.querySelectorAll('.controls button');
    const rows = document.querySelectorAll('tbody tr');
    const checks = document.querySelectorAll('tbody input[type="checkbox"]');
    const counters = document.getElementById('counters');

    function saveChecks() {
      const done = [...checks].filter(c => c.checked).map(c => c.dataset.tema);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(done)); } catch {}
    }

    function loadChecks() {
      try {
        const done = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        for (const c of checks) {
          c.checked = done.includes(c.dataset.tema);
          c.closest('tr').classList.toggle('hecho', c.checked);
        }
      } catch {}
    }

    function updateCounters() {
      const done = [...checks].filter(c => c.checked).length;
      const total = checks.length;
      if (counters) counters.textContent = \`\${done}/\${total} hechos · \${total - done} pendientes\`;
    }

    function rowDone(row) {
      return row.querySelector('input[type="checkbox"]').checked;
    }

    function applyFilter(filter) {
      rows.forEach(row => {
        let show;
        if (filter === 'all') show = true;
        else if (filter === 'hechos') show = rowDone(row);
        else if (filter === 'pendientes') show = !rowDone(row);
        else show = row.dataset.global === filter || row.dataset.res === filter || row.dataset.preg === filter;
        row.classList.toggle('hidden', !show);
      });
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyFilter(btn.dataset.filter);
      });
    });

    checks.forEach(c => {
      c.addEventListener('change', () => {
        c.closest('tr').classList.toggle('hecho', c.checked);
        saveChecks();
        updateCounters();
        const active = document.querySelector('.controls button.active');
        if (active && (active.dataset.filter === 'hechos' || active.dataset.filter === 'pendientes')) {
          applyFilter(active.dataset.filter);
        }
      });
    });

    loadChecks();
    updateCounters();
  </script>
</body>
</html>`;

fs.writeFileSync('ESTADO_TEMAS.html', html, 'utf8');

// También generar markdown
let md = `# Mapa del temario — calidad real\n\n`;
md += `Fecha: 2026-08-22. Preguntas: ${PREGUNTAS.length}. Resúmenes: ${Object.keys(RESUMENES).length}/72.\n\n`;
md += `Criterio de resumen: **Bueno** = la mayoría de bloques tienen nota explicativa + claves. **Malo** = lista plana sin notas. **En blanco** = no existe.\n\n`;
md += `| Tema | Título | Global | Resumen | Preguntas | Nº | Visible>10% | Ratio | a/b/c/d | Notas/Items | Claves |\n`;
md += `|------|--------|--------|---------|-----------|---:|------------:|------:|---------|------------:|-------:|\n`;
for (const r of rows) {
  const g = estadoGlobal(r.res, r.preg);
  md += `| ${r.key} | ${r.titulo} | ${g} | ${r.res.estado} | ${r.preg.estado} | ${r.preg.n||'-'} | ${r.preg.n?Math.round(r.preg.visible)+'%':'-'} | ${r.preg.ratio?r.preg.ratio.toFixed(2):'-'} | ${Array.isArray(r.preg.pos) ? r.preg.pos.join('/') : '-'} | ${r.res.notas}/${r.res.items} | ${r.res.claves} |\n`;
}
md += `\n## Resumen por bloques\n\n`;
md += bloquesTexto + '\n';
md += `\n## Orden de trabajo recomendado\n\n`;
md += `1. **En blanco**: ${listBy('EN BLANCO')}\n`;
md += `2. **Falta resumen**: ${listBy('FALTA RESUMEN')}\n`;
md += `3. **Resúmenes malos**: ${listBy('MALO')}\n`;
md += `4. **Preguntas a revisar**: ${listBy('A REVISAR')}\n`;
md += `5. **Regulares**: ${listBy('REGULARES')}\n`;
md += `6. **OK**: ${listBy('OK')}\n`;
fs.writeFileSync('ESTADO_TEMAS.md', md, 'utf8');

console.log('Generados ESTADO_TEMAS.html y ESTADO_TEMAS.md');
console.log('En blanco:', listBy('EN BLANCO'));
console.log('Falta resumen:', listBy('FALTA RESUMEN'));
console.log('Resúmenes malos:', listBy('MALO'));
console.log('Preguntas a revisar:', listBy('A REVISAR'));
console.log('Regulares:', listBy('REGULARES'));
console.log('OK:', listBy('OK'));

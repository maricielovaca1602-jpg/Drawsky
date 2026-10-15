/* DrawSky stickers: original vector drawings (viewBox 0 0 100 100). Outline color O, soft Cherii fills. */
(function(){
const O = '#4f3f3e';
const s = (d, f, w = 3) => `<path d="${d}" fill="${f}" stroke="${O}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const c = (x, y, r, f, w = 3) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" stroke="${O}" stroke-width="${w}"/>`;
const l = (d, w = 3, col = O) => `<path d="${d}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const e = (x, y, rx, ry, f, w = 3) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${f}" stroke="${O}" stroke-width="${w}"/>`;
const face = () => ''; const faceOld = (x, y, k = 1) => `<circle cx="${x - 6 * k}" cy="${y}" r="${2.2 * k}" fill="${O}"/><circle cx="${x + 6 * k}" cy="${y}" r="${2.2 * k}" fill="${O}"/>${l(`M${x - 3.5 * k} ${y + 4.5 * k}q${3.5 * k} ${3 * k} ${7 * k} 0`, 2.2)}<circle cx="${x - 10 * k}" cy="${y + 4 * k}" r="${2.6 * k}" fill="#f69f95" opacity=".7"/><circle cx="${x + 10 * k}" cy="${y + 4 * k}" r="${2.6 * k}" fill="#f69f95" opacity=".7"/>`;
const t = (x, y, str, size, col = O, wgt = 800) => `<text x="${x}" y="${y}" text-anchor="middle" font-family="Nunito, Inter, sans-serif" font-weight="${wgt}" font-size="${size}" fill="${col}">${str}</text>`;

const S = [
  /* 🍎 Nutri */
  { id:'apple', pack:'nutri', name:'Manzana', svg:s('M50 30c-8-8-30-8-32 14-2 20 12 40 22 40 5 0 7-3 10-3s5 3 10 3c10 0 24-20 22-40-2-22-24-22-32-14z', '#ea7d70') + s('M50 30c0-8 3-14 8-17', 'none') + s('M54 22c6-8 16-8 20-4-5 6-14 8-20 4z', '#bcc07b') + face(50, 55) },
  { id:'banana', pack:'nutri', name:'Plátano', svg:s('M18 34c10 34 46 46 70 30 4-3 2-8-3-6-20 8-44-2-56-26-3-5-12-4-11 2z', '#ffe2a6') + l('M24 40c12 20 32 28 52 24', 2.4) + s('M14 30l6-6 4 6z', '#8e715b') + face(50, 52, 0.85) },
  { id:'carrot', pack:'nutri', name:'Zanahoria', svg:s('M38 34c8-6 22-2 24 8L46 90c-2 4-6 4-7 0L32 46c-1-5 2-9 6-12z', '#ffaf6e') + l('M40 52h8M43 66h7M38 42h6', 2.4) + s('M46 32c-6-10-4-18 2-22 2 8 2 14-2 22zM50 32c4-10 12-14 18-12-4 8-10 12-18 12zM44 32c-8-6-16-6-20-2 6 4 12 4 20 2z', '#bcc07b') + face(47, 52, 0.7) },
  { id:'broccoli', pack:'nutri', name:'Brócoli', svg:s('M42 58h16l4 30H38z', '#dbe098') + s('M50 22c-6 0-10 4-11 8-8-2-15 4-14 12-6 2-8 10-3 15 4 5 12 5 16 1 3 4 8 6 12 6s9-2 12-6c4 4 12 4 16-1 5-5 3-13-3-15 1-8-6-14-14-12-1-4-5-8-11-8z', '#8fae5a') + face(50, 44, 0.8) },
  { id:'avocado', pack:'nutri', name:'Palta', svg:s('M50 12c-14 0-22 22-26 40-4 18 8 36 26 36s30-18 26-36c-4-18-12-40-26-40z', '#7c9a4a') + s('M50 26c-9 0-15 16-17 28-3 13 5 26 17 26s20-13 17-26c-2-12-8-28-17-28z', '#dbe098') + c(50, 62, 9, '#a07850') + face(50, 44, 0.75) },
  { id:'milk', pack:'nutri', name:'Leche', svg:s('M32 30l8-14h20l8 14v56c0 2-2 4-4 4H36c-2 0-4-2-4-4z', '#ffffff') + s('M32 30h36', 'none') + s('M32 46h36v24H32z', '#abcdde') + t(50, 63, 'LECHE', 9.5, '#ffffff') + face(50, 80, 0.7) },
  { id:'cheese', pack:'nutri', name:'Queso', svg:s('M14 66l58-34 14 10v26c0 3-2 6-6 6H18c-3 0-4-4-4-8z', '#ffcc80') + s('M14 66h72', 'none') + c(36, 70, 4, '#ffe2a6', 2.4) + c(70, 58, 5, '#ffe2a6', 2.4) + c(56, 72, 3, '#ffe2a6', 2.4) },
  { id:'egg', pack:'nutri', name:'Huevo', svg:s('M50 14c-16 0-28 26-28 44 0 16 12 28 28 28s28-12 28-28c0-18-12-44-28-44z', '#fffaf2') + face(50, 58) },
  { id:'fish', pack:'nutri', name:'Pescado', svg:s('M18 50c14-20 42-24 58 0-16 24-44 20-58 0z', '#abcdde') + s('M76 50l14-12v24z', '#7d8be0') + c(32, 46, 3.2, O, 0) + l('M46 38c4 8 4 16 0 24', 2.4) },
  { id:'water', pack:'nutri', name:'Agua', svg:s('M28 22h44l-6 64c0 2-2 4-4 4H38c-2 0-4-2-4-4z', '#d5edf8') + s('M31 46h38l-4 40c0 2-2 4-4 4H39c-2 0-4-2-4-4z', '#abcdde', 0) + s('M28 22h44l-6 64c0 2-2 4-4 4H38c-2 0-4-2-4-4z', 'none') + face(50, 64, 0.8) },
  { id:'bread', pack:'nutri', name:'Pan', svg:s('M18 46c-6-14 8-26 32-26s38 12 32 26c-2 4-6 4-6 8v26c0 3-2 6-6 6H30c-4 0-6-3-6-6V54c0-4-4-4-6-8z', '#e5b77f') + s('M28 48c-4-8 6-16 22-16s26 8 22 16c-1 3-4 3-4 6v24H32V54c0-3-3-3-4-6z', '#f2dcbe', 0) + face(50, 62, 0.8) },
  { id:'orange', pack:'nutri', name:'Naranja', svg:c(50, 56, 30, '#ffaf6e') + s('M50 26c2-6 8-10 14-10-2 6-8 10-14 10z', '#bcc07b') + face(50, 58) },
  { id:'plate', pack:'nutri', name:'Plato saludable', svg:c(50, 52, 38, '#ffffff') + s('M50 52V14a38 38 0 0 1 36 26z', '#bcc07b', 2.4) + s('M50 52l36-12a38 38 0 0 1-26 46z', '#ffaf6e', 2.4) + s('M50 52l10 34a38 38 0 0 1-44-14z', '#ffcc80', 2.4) + s('M50 52L16 72a38 38 0 0 1 34-58z', '#ee7ea0', 2.4) + c(50, 52, 38, 'none') },
  /* 🩺 Salud */
  { id:'heart', pack:'salud', name:'Corazón', svg:s('M50 84S14 62 14 36c0-12 9-20 19-20 8 0 14 5 17 11 3-6 9-11 17-11 10 0 19 8 19 20 0 26-36 48-36 48z', '#ee7ea0') + face(50, 46) },
  { id:'kidney', pack:'salud', name:'Riñón', svg:s('M58 16c-18-4-36 8-38 30s12 40 30 40c14 0 22-10 20-20-1-6-8-8-8-14s6-8 8-14c2-10-2-20-12-22z', '#d5708b') + l('M64 50h18', 4, '#9a81b0') + face(42, 50, 0.85) },
  { id:'lungs', pack:'salud', name:'Pulmones', svg:l('M50 14v30M50 44c-4 4-8 6-12 6M50 44c4 4 8 6 12 6', 4) + s('M42 34c-12-6-26 10-26 30 0 14 6 22 14 22 10 0 14-8 14-18V38c0-2-1-3-2-4z', '#f69f95') + s('M58 34c12-6 26 10 26 30 0 14-6 22-14 22-10 0-14-8-14-18V38c0-2 1-3 2-4z', '#f69f95') + face(50, 70, 0.6) },
  { id:'stetho', pack:'salud', name:'Estetoscopio', svg:l('M28 14v22c0 14 10 22 22 22s22-8 22-22V14', 4.5) + l('M50 58v14c0 8 6 14 14 14s14-6 14-14V62', 4.5) + c(78, 56, 8, '#abcdde') + c(28, 13, 4, '#7d8be0', 2.4) + c(72, 13, 4, '#7d8be0', 2.4) },
  { id:'pill', pack:'salud', name:'Cápsula', svg:`<g transform="rotate(-30 50 50)">${s('M50 33H31a17 17 0 0 0 0 34h19z', '#ffffff')}${s('M50 33h19a17 17 0 0 1 0 34H50z', '#ee7ea0')}${l('M28 41a10 10 0 0 0-4 7', 2.6, '#ffffff')}<path d="M27 42a9 9 0 0 0-3 6" fill="none" stroke="#e1cfca" stroke-width="2.4" stroke-linecap="round"/><path d="M60 40h8" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity=".8"/></g>` },
  { id:'syringe', pack:'salud', name:'Jeringa', svg:`<g transform="rotate(-40 50 50)">${s('M30 40h40v20H30z', '#d5edf8')}${s('M30 46h22v8H30z', '#abcdde', 0)}${s('M70 44h10v12H70zM80 48h12v4H80z', '#b19f9a')}${s('M20 38h10v24H20z', '#e1cfca')}${l('M14 50h6M36 40v6M44 40v6M52 40v6', 2.4)}</g>` },
  { id:'thermo', pack:'salud', name:'Termómetro', svg:s('M42 18a8 8 0 0 1 16 0v40a16 16 0 1 1-16 0z', '#ffffff') + c(50, 72, 10, '#ea7d70', 0) + s('M47 30h6v38h-6z', '#ea7d70', 0) + s('M42 18a8 8 0 0 1 16 0v40a16 16 0 1 1-16 0z', 'none') + l('M62 26h6M62 36h6M62 46h6', 2.4) },
  { id:'tooth', pack:'salud', name:'Diente', svg:s('M30 18c-10 4-12 18-8 30 3 10 4 18 6 30 1 8 10 8 12 0l4-14c1-4 11-4 12 0l4 14c2 8 11 8 12 0 2-12 3-20 6-30 4-12 2-26-8-30-8-3-14 2-20 2s-12-5-20-2z', '#ffffff') + face(50, 42, 0.8) },
  { id:'brain', pack:'salud', name:'Cerebro', svg:s('M50 20c-6-6-18-4-20 4-10 0-16 10-12 18-6 6-4 18 6 20 0 8 10 14 18 10 2 4 6 6 8 6s6-2 8-6c8 4 18-2 18-10 10-2 12-14 6-20 4-8-2-18-12-18-2-8-14-10-20-4z', '#f0b6c6') + l('M50 22v54M36 36c4 2 6 6 4 10M64 36c-4 2-6 6-4 10M32 58c4 0 8 2 8 6M68 58c-4 0-8 2-8 6', 2.4) },
  /* ✨ Estudio */
  { id:'star', pack:'estudio', name:'Estrella', svg:s('M50 10l11 24 26 3-19 18 5 26-23-13-23 13 5-26-19-18 26-3z', '#ffcc80') + face(50, 50, 0.8) },
  { id:'important', pack:'estudio', name:'¡Importante!', svg:s('M8 32h84l-6 18 6 18H8l6-18z', '#ee7ea0') + t(50, 55, '¡IMPORTANTE!', 10, '#ffffff', 900) },
  { id:'review', pack:'estudio', name:'Repasar', svg:s('M14 30h60l14 20-14 20H14c-3 0-5-2-5-5V35c0-3 2-5 5-5z', '#abcdde') + c(76, 50, 4, '#ffffff', 2.4) + t(40, 55, 'REPASAR', 12, O, 900) },
  { id:'exam', pack:'estudio', name:'Examen', svg:s('M18 24h64c3 0 5 2 5 5v54c0 3-2 5-5 5H18c-3 0-5-2-5-5V29c0-3 2-5 5-5z', '#ffffff') + s('M13 29c0-3 2-5 5-5h64c3 0 5 2 5 5v11H13z', '#ea7d70') + l('M32 16v14M68 16v14', 4) + t(50, 70, 'EXAMEN', 14, O, 900) },
  { id:'check', pack:'estudio', name:'Listo', svg:c(50, 50, 36, '#bcc07b') + l('M32 52l12 12 24-26', 7, '#ffffff') },
  { id:'alert', pack:'estudio', name:'Ojo', svg:s('M50 12L90 84H10z', '#ffcc80') + l('M50 38v22', 7) + c(50, 72, 4, O, 0) },
  { id:'idea', pack:'estudio', name:'Idea', svg:s('M50 12c-16 0-26 12-26 26 0 10 6 16 10 22 3 4 4 8 4 12h24c0-4 1-8 4-12 4-6 10-12 10-22 0-14-10-26-26-26z', '#ffe2a6') + s('M38 72h24v8H38zM40 80h20v6c0 2-2 4-4 4H44c-2 0-4-2-4-4z', '#b19f9a') + face(50, 40, 0.8) },
  { id:'coffee', pack:'estudio', name:'Café', svg:s('M20 36h50v34c0 10-8 18-18 18H38c-10 0-18-8-18-18z', '#e5daca') + s('M70 44h6c6 0 10 4 10 10s-4 10-10 10h-6', 'none', 4) + l('M34 14c-4 6 4 8 0 14M48 12c-4 6 4 8 0 14M62 14c-4 6 4 8 0 14', 2.6, '#b19f9a') + face(45, 56, 0.85) },
  { id:'book', pack:'estudio', name:'Libro', svg:s('M14 22c12-4 24-4 36 4v62c-12-8-24-8-36-4z', '#7d8be0') + s('M86 22c-12-4-24-4-36 4v62c12-8 24-8 36-4z', '#b5bef5') + l('M22 36c6-2 14-1 20 2M22 48c6-2 14-1 20 2M58 38c6-3 14-4 20-2M58 50c6-3 14-4 20-2', 2.2, '#ffffff') },
  /* 🎀 Washi y notitas */
  { id:'washi1', pack:'washi', name:'Washi rosa', svg:`<g transform="rotate(-8 50 50)">${s('M8 38l4 4-4 4 4 4-4 4 4 4h76l-4-4 4-4-4-4 4-4-4-4 4-4z', '#ffa9ba', 2)}${[16, 30, 44, 58, 72].map(x => `<circle cx="${x + 3}" cy="${50}" r="3" fill="#ffffff" opacity=".85"/>`).join('')}</g>` },
  { id:'washi2', pack:'washi', name:'Washi rayas', svg:`<g transform="rotate(6 50 50)"><defs><pattern id="ws2" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="4" height="8" fill="#abcdde"/><rect x="4" width="4" height="8" fill="#d5edf8"/></pattern></defs>${s('M8 38l4 4-4 4 4 4-4 4 4 4h76l-4-4 4-4-4-4 4-4-4-4 4-4z', 'url(#ws2)', 2)}</g>` },
  { id:'washi3', pack:'washi', name:'Washi cuadros', svg:`<g transform="rotate(-4 50 50)"><defs><pattern id="ws3" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="#f2dcbe"/><rect width="5" height="5" fill="#ffcc80" opacity=".7"/><rect x="5" y="5" width="5" height="5" fill="#ffcc80" opacity=".7"/></pattern></defs>${s('M8 38l4 4-4 4 4 4-4 4 4 4h76l-4-4 4-4-4-4 4-4-4-4 4-4z', 'url(#ws3)', 2)}</g>` },
  { id:'postit', pack:'washi', name:'Post-it', svg:s('M16 14h68v50L64 86H16z', '#ffe2a6') + s('M84 64H68c-2 0-4 2-4 4v18z', '#ffcc80') + s('M38 8h24l-2 12H40z', '#d5e2d3', 2) + l('M26 34h44M26 46h44M26 58h30', 2.4, '#c9a98d') },
  { id:'tag', pack:'washi', name:'Etiqueta', svg:s('M14 30h50l22 20-22 20H14c-3 0-5-2-5-5V35c0-3 2-5 5-5z', '#cdbdeb') + c(70, 50, 4, '#ffffff', 2.4) + l('M22 44h30M22 56h22', 3, '#ffffff') },
  { id:'clip', pack:'washi', name:'Clip', svg:l('M40 86V26c0-8 6-14 14-14s14 6 14 14v50c0 6-4 10-10 10s-10-4-10-10V30', 6, '#9a81b0') + l('M40 86V26c0-8 6-14 14-14s14 6 14 14v50c0 6-4 10-10 10s-10-4-10-10V30', 2, '#cdbdeb') },
  { id:'bow', pack:'washi', name:'Moño', svg:s('M50 48C38 30 18 28 16 40c-2 12 16 18 34 8zM50 48c12-18 32-20 34-8 2 12-16 18-34 8z', '#ee7ea0') + s('M44 50l-14 34 12-6 8 10 2-38zM56 50l14 34-12-6-8 10-2-38z', '#ffa9ba') + c(50, 48, 7, '#d5708b') },
  /* ➡️ Flechas y llaves */
  { id:'arrow', pack:'flechas', name:'Flecha', svg:l('M12 50h64', 8) + l('M58 30l22 20-22 20', 8) + l('M12 50h64', 4, '#ffaf6e') + l('M58 30l22 20-22 20', 4, '#ffaf6e') },
  { id:'curve', pack:'flechas', name:'Flecha curva', svg:l('M16 74c6-34 34-50 62-44', 8) + l('M64 18l16 12-12 16', 8) + l('M16 74c6-34 34-50 62-44', 4, '#7d8be0') + l('M64 18l16 12-12 16', 4, '#7d8be0') },
  { id:'double', pack:'flechas', name:'Doble flecha', svg:l('M18 50h64M34 34L18 50l16 16M66 34l16 16-16 16', 8) + l('M18 50h64M34 34L18 50l16 16M66 34l16 16-16 16', 4, '#bcc07b') },
  { id:'brace', pack:'flechas', name:'Llave', svg:l('M62 12c-10 0-14 4-14 12v14c0 6-4 10-12 12 8 2 12 6 12 12v14c0 8 4 12 14 12', 6) },
  { id:'circle', pack:'flechas', name:'Círculo', svg:l('M80 34c-6-14-24-20-40-16-18 4-28 18-24 34 4 18 24 26 42 22 16-4 26-16 24-30-1-6-4-10-8-14', 5, '#ea7d70') },
  { id:'underline', pack:'flechas', name:'Subrayado', svg:l('M10 58c20-8 40 8 60-2 8-4 14-6 20-4', 6, '#ffcc80') + l('M18 72c18-6 34 4 52-2', 4, '#ffcc80') }
];
const PACKS = [
  /* nutri and salud stay drawn but hidden for now */
  { id:'estudio', name:'✨ Estudio' }, { id:'washi', name:'🎀 Washi y notitas' }, { id:'flechas', name:'➡️ Flechas' }
];
/* full SVG with a white die-cut border around the drawing */
let uid = 0;
function stickerSvg(st, size = 100){
  /* patterns go once, outside the white border copy, with ids unique on the page */
  const n = 's' + (++uid);
  let body = st.svg.replace(/id="(\w+)"/g, `id="$1${n}"`).replace(/url\(#(\w+)\)/g, `url(#$1${n})`);
  const defs = (body.match(/<defs>[\s\S]*?<\/defs>/g) || []).join('');
  body = body.replace(/<defs>[\s\S]*?<\/defs>/g, '');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 112 112" width="${size}" height="${size}"><style>.halo *{fill:#fff!important;stroke:#fff!important;stroke-width:12px!important}.halo text{stroke-width:9px!important}</style>${defs}<g class="halo">${body}</g><g>${body}</g></svg>`;
}
const api = { list:S, packs:PACKS, svg:stickerSvg };
if (typeof window !== 'undefined') window.DSStickers = api;
if (typeof module !== 'undefined') module.exports = api;
})();

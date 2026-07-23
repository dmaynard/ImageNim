import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.join(__dirname, '../public/images');

const categories = {
  astronomy: [
    { name: 'cosmic_nebula_1', bg: '#0b0c10', gradients: ['#ff007f', '#4b0082', '#00ffff'], shapes: 'circle' },
    { name: 'starlight_galaxy_2', bg: '#080811', gradients: ['#7928ca', '#ff0080', '#4285f4'], shapes: 'spiral' },
    { name: 'solar_flare_3', bg: '#100600', gradients: ['#ff4500', '#ff8c00', '#ffd700'], shapes: 'sun' },
    { name: 'deep_space_4', bg: '#020014', gradients: ['#00d2ff', '#3a7bd5', '#8a2be2'], shapes: 'cluster' },
    { name: 'supernova_5', bg: '#0f051d', gradients: ['#f80759', '#bc4e9c', '#6a11cb'], shapes: 'burst' },
    { name: 'ring_planet_6', bg: '#050c1e', gradients: ['#00f2fe', '#4facfe', '#00c6ff'], shapes: 'ring' },
    { name: 'aurora_borealis_7', bg: '#001419', gradients: ['#00ff87', '#60efff', '#0061ff'], shapes: 'wave' },
    { name: 'black_hole_8', bg: '#000000', gradients: ['#ff0055', '#ff5000', '#7a00ff'], shapes: 'singularity' },
    { name: 'hidden_quasar_9', bg: '#0b001a', gradients: ['#e100ff', '#7f00ff', '#00d2ff'], shapes: 'beam' },
    { name: 'hidden_pulsar_10', bg: '#140008', gradients: ['#ff003c', '#ff8000', '#ffff00'], shapes: 'pulse' },
  ],
  geometry: [
    { name: 'neon_cube_1', bg: '#0a0a14', gradients: ['#00f2fe', '#4facfe'], stroke: '#00f2fe' },
    { name: 'hex_lattice_2', bg: '#120524', gradients: ['#f80759', '#bc4e9c'], stroke: '#ff007f' },
    { name: 'cyber_triangle_3', bg: '#02151e', gradients: ['#00ff87', '#60efff'], stroke: '#00ff87' },
    { name: 'golden_spiral_4', bg: '#1c1400', gradients: ['#ffe000', '#799f0c'], stroke: '#ffe000' },
    { name: 'isogrid_5', bg: '#1a001a', gradients: ['#ea00d9', '#711c91'], stroke: '#ea00d9' },
    { name: 'hypercube_6', bg: '#051923', gradients: ['#00a8e8', '#003459'], stroke: '#00a8e8' },
    { name: 'fractal_mesh_7', bg: '#220011', gradients: ['#ff0055', '#ff5000'], stroke: '#ff0055' },
    { name: 'crystal_poly_8', bg: '#031b15', gradients: ['#00b4d8', '#0077b6'], stroke: '#00b4d8' },
    { name: 'hidden_torus_9', bg: '#17002e', gradients: ['#9d4edd', '#5a189a'], stroke: '#9d4edd' },
    { name: 'hidden_dodeca_10', bg: '#2b0018', gradients: ['#f72585', '#7209b7'], stroke: '#f72585' },
  ],
  abstract: [
    { name: 'liquid_flow_1', bg: '#0f0c29', g1: '#24243e', g2: '#302b63', g3: '#0f0c29' },
    { name: 'vibrant_prism_2', bg: '#000000', g1: '#ff0000', g2: '#00ff00', g3: '#0000ff' },
    { name: 'velvet_waves_3', bg: '#140029', g1: '#51087e', g2: '#6c0ba9', g3: '#a239ca' },
    { name: 'sunset_lava_4', bg: '#1f0008', g1: '#ff4e50', g2: '#f9d423', g3: '#e65c00' },
    { name: 'ocean_depths_5', bg: '#001a2e', g1: '#028090', g2: '#00a896', g3: '#02c39a' },
    { name: 'cyberpunk_glow_6', bg: '#0d001a', g1: '#ff007f', g2: '#00f6ff', g3: '#f100ff' },
    { name: 'emerald_dust_7', bg: '#001c10', g1: '#11998e', g2: '#38ef7d', g3: '#0575e6' },
    { name: 'sunfire_plasma_8', bg: '#260000', g1: '#e52d27', g2: '#b31217', g3: '#ff512f' },
    { name: 'hidden_vortex_9', bg: '#10002b', g1: '#3c096c', g2: '#5a189a', g3: '#7b2cbf' },
    { name: 'hidden_quantum_10', bg: '#001c24', g1: '#0077b6', g2: '#0096c7', g3: '#03045e' },
  ]
};

function generateSVG(cat, item, index) {
  const width = 300;
  const height = 225;

  let content = '';
  if (cat === 'astronomy') {
    content = `
      <defs>
        <radialGradient id="grad${index}" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stop-color="${item.gradients[0]}" stop-opacity="0.9" />
          <stop offset="60%" stop-color="${item.gradients[1]}" stop-opacity="0.6" />
          <stop offset="100%" stop-color="${item.gradients[2]}" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="lgrad${index}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${item.gradients[0]}" />
          <stop offset="100%" stop-color="${item.gradients[1]}" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="${item.bg}" />
      <circle cx="${150 + Math.sin(index)*40}" cy="${112 + Math.cos(index)*30}" r="${70 + index*4}" fill="url(#grad${index})" />
      <circle cx="${60 + index*20}" cy="${50 + index*15}" r="${2 + (index%3)}" fill="#ffffff" opacity="0.9" />
      <circle cx="${240 - index*15}" cy="${180 - index*10}" r="${3 + (index%2)}" fill="#ffffff" opacity="0.8" />
      <path d="M ${20 + index*25} ${180 - index*10} Q 150 50 ${280 - index*20} ${120 + index*5}" stroke="url(#lgrad${index})" stroke-width="${3 + (index%4)}" fill="none" opacity="0.7" />
    `;
  } else if (cat === 'geometry') {
    content = `
      <defs>
        <linearGradient id="ggrad${index}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${item.gradients[0]}" />
          <stop offset="100%" stop-color="${item.gradients[1]}" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="${item.bg}" />
      <g stroke="${item.stroke}" stroke-width="2" fill="none" opacity="0.8">
        <polygon points="150,30 ${230 - index*5},${170 + index*2} ${70 + index*5},${170 + index*2}" fill="url(#ggrad${index})" fill-opacity="0.3"/>
        <rect x="${50 + index*10}" y="${40 + index*5}" width="${100 + index*8}" height="${100 + index*8}" rx="8" stroke="${item.stroke}" stroke-width="3" transform="rotate(${index * 12} 150 112)"/>
        <circle cx="150" cy="112" r="${30 + index * 6}" stroke="url(#ggrad${index})" stroke-width="2" />
      </g>
    `;
  } else {
    content = `
      <defs>
        <linearGradient id="agrad${index}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${item.g1}" />
          <stop offset="50%" stop-color="${item.g2}" />
          <stop offset="100%" stop-color="${item.g3}" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="${item.bg}" />
      <path d="M 0 ${60 + index*10} Q 75 ${20 + index*15} 150 ${110 - index*5} T 300 ${80 + index*8} V 225 H 0 Z" fill="url(#agrad${index})" opacity="0.8" />
      <circle cx="${100 + index*15}" cy="${80 + index*8}" r="${40 + index*3}" fill="${item.g1}" opacity="0.5" />
    `;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    ${content}
    <text x="15" y="210" font-family="'Outfit', sans-serif" font-size="12" font-weight="600" fill="#ffffff" opacity="0.6">${item.name}</text>
  </svg>`;
}

for (const [cat, items] of Object.entries(categories)) {
  const dir = path.join(baseDir, cat);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  items.forEach((item, idx) => {
    const filename = `${item.name}.svg`;
    const filepath = path.join(dir, filename);
    fs.writeFileSync(filepath, generateSVG(cat, item, idx), 'utf8');
    console.log(`Generated ${filepath}`);
  });
}

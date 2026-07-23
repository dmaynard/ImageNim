import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imagesDir = path.join(__dirname, '../public/images');

const categoryMetaData = {
  bryce: {
    id: 'bryce',
    name: 'Bryce Canyon',
    description: 'Classic Bryce Canyon rock formations'
  },
  flowers: {
    id: 'flowers',
    name: 'Flowers & Flora',
    description: 'Vibrant botanical floral photography'
  },
  sunsets: {
    id: 'sunsets',
    name: 'Sunsets & Skies',
    description: 'Golden hour sunset landscapes'
  },
  zion: {
    id: 'zion',
    name: 'Zion National Park',
    description: 'Majestic red rock canyons of Zion'
  },
  astronomy: {
    id: 'astronomy',
    name: 'Astronomy & Cosmos',
    description: 'Deep space nebulae and galaxies'
  },
  geometry: {
    id: 'geometry',
    name: 'Neon Geometry',
    description: 'Cyberpunk geometric structures'
  },
  abstract: {
    id: 'abstract',
    name: 'Abstract Fluid',
    description: 'Vibrant color flows and wave art'
  }
};

const categories = [];

for (const [folder, meta] of Object.entries(categoryMetaData)) {
  const dirPath = path.join(imagesDir, folder);
  if (!fs.existsSync(dirPath)) continue;

  const files = fs.readdirSync(dirPath)
    .filter(f => f.endsWith('.JPG') || f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.svg'))
    .sort();

  if (files.length < 8) continue;

  const allImages = files.map((f, i) => ({
    id: `${meta.id}-${i + 1}`,
    name: f.replace(/\.[^/.]+$/, ''),
    url: `/images/${folder}/${f}`
  }));

  categories.push({
    id: meta.id,
    name: meta.name,
    description: meta.description,
    images: allImages
  });
}

const content = `import { ImageCategory } from './types';

export const PRESET_CATEGORIES: ImageCategory[] = ${JSON.stringify(categories, null, 2)};
`;

const outputPath = path.join(__dirname, '../src/presets.ts');
fs.writeFileSync(outputPath, content, 'utf8');
console.log(`Generated ${outputPath} with ${categories.length} categories!`);

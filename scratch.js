const fs = require('fs');
let text = fs.readFileSync('D:/VS CODE/PROJECTS/BEAUTYSALON/src/lib/data/salons.ts', 'utf-8');
const images = [
  'https://blg.luzo.app/uploads/Screenshot_2025_07_14_135337_cdeaf5cd00.png',
  'https://blg.luzo.app/uploads/Screenshot_2025_07_14_135630_b72b592b94.png',
  'https://blg.luzo.app/uploads/Screenshot_2025_07_14_135822_97bce66d43.png',
  'https://blg.luzo.app/uploads/Screenshot_2025_07_14_140030_8ec1db1649.png',
  'https://blg.luzo.app/uploads/Screenshot_2025_07_14_140233_a43593e19c.png',
  'https://blg.luzo.app/uploads/Screenshot_2025_07_14_140356_f18232277b.png',
  'https://blg.luzo.app/uploads/Screenshot_2025_07_14_140624_43bd2b3b73.png',
  'https://blg.luzo.app/uploads/Screenshot_2025_07_14_140952_5abaff0405.png'
];

let i = 0;
text = text.replace(/image: 'https:\/\/images\.unsplash\.com\/[^']+'/g, () => {
  return `image: '${images[i++ % images.length]}'`;
});

i = 0;
text = text.replace(/images: \[[\s\S]*?\]/g, () => {
  const replacement = `images: [\n      '${images[i++ % images.length]}',\n    ]`;
  return replacement;
});

fs.writeFileSync('D:/VS CODE/PROJECTS/BEAUTYSALON/src/lib/data/salons.ts', text);
console.log('Done!');

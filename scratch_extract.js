const fs = require('fs');
const text = fs.readFileSync('C:/Users/Rishita/.gemini/antigravity/brain/e95fd262-f69e-43af-8468-77726c27ed7e/.system_generated/steps/373/content.md', 'utf-8');

// Extract all image URLs
const imgUrls = text.match(/https?:\/\/[^\s"')\]]+\.(?:jpg|jpeg|png|webp)(?:\?[^\s"')\]]*)?/gi) || [];
const unique = [...new Set(imgUrls)].filter(u => !u.includes('logo') && !u.includes('icon') && !u.includes('avatar'));
console.log(JSON.stringify(unique.slice(0, 20), null, 2));

// Also show surrounding context for jd image urls
const jdImgs = text.match(/https?:\/\/[^\s"')\]]*jd[^\s"')\]]*\.(?:jpg|jpeg|png|webp)[^\s"')"]*/gi) || [];
console.log('\n--- JD IMAGES ---');
console.log(JSON.stringify([...new Set(jdImgs)], null, 2));

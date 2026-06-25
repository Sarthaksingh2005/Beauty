const fs = require('fs');
const text = fs.readFileSync('C:/Users/Rishita/.gemini/antigravity/brain/e95fd262-f69e-43af-8468-77726c27ed7e/.system_generated/steps/118/content.md', 'utf-8');

const regex = /"([0-9]+\.\s+[^"]+?)"/g;
let match;
while ((match = regex.exec(text)) !== null) {
    if (match[1].length < 60) {
        console.log(match[1]);
    }
}

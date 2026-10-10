const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const colorMap = {
  '#B36B4C': '#D4AF37', // Button gold
  '#8F563D': '#B5952F', // Button hover gold
  '#090F1D': '#000000', // Dark backgrounds to black
  '#161A22': '#000000', // Dark text to black
  '#C5A880': '#D4AF37', // Eyebrow text gold
};

function walkSync(currentDirPath, callback) {
  fs.readdirSync(currentDirPath).forEach(function (name) {
    const filePath = path.join(currentDirPath, name);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      callback(filePath, stat);
    } else if (stat.isDirectory()) {
      walkSync(filePath, callback);
    }
  });
}

walkSync(directoryPath, function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.css') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    for (const [oldColor, newColor] of Object.entries(colorMap)) {
      // Create a regex to match both upper and lower case hex codes
      const regex = new RegExp(oldColor, 'gi');
      if (regex.test(content)) {
        content = content.replace(regex, newColor);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated colors in ${filePath}`);
    }
  }
});

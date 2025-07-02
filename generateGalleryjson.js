const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, 'public/images');
const outputJSON = path.join(imageDir, 'gallery.json');

const supportedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

fs.readdir(imageDir, (err, files) => {
  if (err) {
    console.error('❌ Failed to read directory:', err);
    return;
  }

  const imageFiles = files.filter(file => supportedExtensions.includes(path.extname(file).toLowerCase()));

  fs.writeFile(outputJSON, JSON.stringify(imageFiles, null, 2), err => {
    if (err) {
      console.error('❌ Failed to write JSON file:', err);
    } else {
      console.log(`✅ gallery.json created with ${imageFiles.length} images.`);
    }
  });
});

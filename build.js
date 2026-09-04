const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist');
if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist, { recursive: true });
}

// Copy essential files to dist
const filesToCopy = ['index.html', 'style.css', 'script.js', 'diya_avatar.jpg', 'gemini_generated_video_5bb573a1.mp4'];
for (const file of filesToCopy) {
  const src = path.join(__dirname, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(dist, file));
  }
}

// Copy certificatesFolder
const certsDir = path.join(__dirname, 'certificatesFolder');
const distCerts = path.join(dist, 'certificatesFolder');
if (fs.existsSync(certsDir)) {
  fs.cpSync(certsDir, distCerts, { recursive: true });
}

console.log('✅ Build completed successfully: files copied to dist/');

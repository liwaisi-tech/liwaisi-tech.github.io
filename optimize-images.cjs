const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'input-images');
const outputDir = path.join(__dirname, 'output-images');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

const targets = [
  { name: 'desktop', width: 1200 },
  { name: 'mobile', width: 600 }
];

const maxSize = 200 * 1024; // 200kB

const manifest = {};

function getOutputName(file, target) {
  const base = path.basename(file, path.extname(file));
  return `${base}-${target.name}.webp`;
}

async function optimizeImage(inputPath, outputPath, width) {
  let quality = 80;
  let buffer;
  do {
    buffer = await sharp(inputPath)
      .resize({ width })
      .webp({ quality })
      .toBuffer();
    quality -= 5;
  } while (buffer.length > maxSize && quality >= 40);

  fs.writeFileSync(outputPath, buffer);
  console.log(`✔ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${(buffer.length/1024).toFixed(1)}kB, calidad: ${quality+5})`);
}

async function processImages() {
  const files = fs.readdirSync(inputDir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if ([".png", ".jpg", ".jpeg", ".heic", ".heif"].includes(ext)) {
      const inputPath = path.join(inputDir, file);
      const base = path.basename(file, ext);
      manifest[base] = {};
      for (const target of targets) {
        const outputPath = path.join(outputDir, getOutputName(file, target));
        await optimizeImage(inputPath, outputPath, target.width);
        // Guardar la ruta relativa para usar en el proyecto (ajusta si usas otra carpeta)
        manifest[base][target.name] = `/images/${getOutputName(file, target)}`;
      }
    }
  }
  // Escribir el manifest.json
  fs.writeFileSync(path.join(outputDir, 'images-manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('\nManifest generado en output-images/images-manifest.json');
}

processImages(); 
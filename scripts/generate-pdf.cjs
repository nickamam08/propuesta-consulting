const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const htmlPath = path.resolve(__dirname, 'generate-pdf.html');
const outPdfPath = path.resolve(__dirname, '../public/Propuesta_Comercial_Finanzas_Consulting_PDP.pdf');
const edgeExe = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

console.log('Generating PDF from:', htmlPath);
console.log('Output target:', outPdfPath);

if (fs.existsSync(outPdfPath)) {
  fs.unlinkSync(outPdfPath);
}

const args = [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  `--print-to-pdf=${outPdfPath}`,
  '--no-pdf-header-footer',
  htmlPath
];

try {
  execFileSync(edgeExe, args, { stdio: 'inherit' });
} catch (err) {
  // Edge headless sometimes returns code 0 or finishes with log
  console.log('Edge process completed:', err.status || 0);
}

if (!fs.existsSync(outPdfPath)) {
  throw new Error('PDF output file was not generated!');
}

const buf = fs.readFileSync(outPdfPath, 'latin1');
const pages = (buf.match(/\/Type\s*\/Page\b/g) || []).length;
const stats = fs.statSync(outPdfPath);

console.log(`\n========================================`);
console.log(`PDF GENERATION SUCCESSFUL`);
console.log(`File: ${outPdfPath}`);
console.log(`Size: ${(stats.size / 1024).toFixed(1)} KB`);
console.log(`Page count: ${pages}`);
console.log(`========================================\n`);

if (pages !== 4) {
  console.warn(`WARNING: Expected 4 pages but got ${pages}`);
}

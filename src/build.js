const fs = require('fs');
const path = require('path');

console.log('--- Iniciando proceso de build ---');

// Aquí podrías agregar minificación, optimización de imágenes, etc.
// Por ahora, simulamos una compilación simple copiando o validando que las carpetas existan.

const publicDir = path.join(__dirname, '../public');
const indexHtml = path.join(publicDir, 'index.html');

if (fs.existsSync(indexHtml)) {
    console.log('✔ Archivo HTML verificado correctamente.');
    const content = fs.readFileSync(indexHtml, 'utf-8');
    console.log(`✔ El archivo tiene un tamaño de ${content.length} caracteres.`);
} else {
    console.error('❌ Error: public/index.html no existe.');
    process.exit(1);
}

console.log('✔ Build completado exitosamente.');

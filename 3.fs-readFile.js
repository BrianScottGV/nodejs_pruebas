// ASINCRONO CALLBACK

const fs = require('node:fs');

console.log('Leyendo el primer archivo...');
fs.readFile('./archivo.txt', 'utf-8', (err,text) => {
    console.log(text);
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
})

console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8', (err, text2) => {
    console.log(text2);
    if (err) {
        console.error('Error al leer el segundo archivo:', err);
        return;
    }
});
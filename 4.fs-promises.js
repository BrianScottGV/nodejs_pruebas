//Esto solo en los modulos nativos
//que no tienen promesas nativas

//const { promisify } = require('node:util');
//const readFilePrimise = promisify('fs.readfile');



//ASUNCRONO SECUENCIAL

const fs = require('node:fs/promises');
const { text } = require('node:stream/consumers');

console.log('Leyendo el primer archivo...');
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log(text);
    })

console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text=> {
        console.log(text);
    })

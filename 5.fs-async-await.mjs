//Esto solo en los modulos nativos
//que no tienen promesas nativas

//const { promisify } = require('node:util');
//const readFilePrimise = promisify('fs.readfile');

//ASINCRONO SECUENCIAL

import { readFile } from "node:fs/promises";

console.log('Leyendo el primer archivo...');
const text = await readFile('./archivo.txt', 'utf-8')
console.log(text);
console.log('hacer cosas mientas lee el archivo...');

console.log('Leyendo el segundo archivo...');
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log(secondText);
//Esto solo en los modulos nativos
//que no tienen promesas nativas

//const { promisify } = require('node:util');
//const readFilePrimise = promisify('fs.readfile');

//ASINCRONO PARARELO

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText])) => {
    console.log('Primer Text: ', text),
    console.log('Segundo Text: ', secondText);
}

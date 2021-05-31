
// const { number } = require('yargs');
const {crearTabla} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

/* 
    los argv también los puedo usar mediante la letra de abreviación:
    i.e.: argv.b, argv.h, argv.l
 */
crearTabla(argv.base,argv.listar,argv.hasta)
    .then( nombreArchivo => console.log(nombreArchivo,' creado'))
    .catch( err => console.log(err));
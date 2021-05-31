const argv = require('yargs')
    .option({
        'b':{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar',
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola',
        },
        'h':{
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Hasta qué valor se hace la tabla',
        }
    })
    .check( (argv,options) =>{
        if(isNaN(argv.base)){
            throw 'La base debe ser un número';
        }
        if(isNaN(argv.hasta)){
            throw `El valor hasta debe ser un número`;
        }
        if(argv.hasta<1){
            throw `El valor 'hasta' debe ser mayor que 1`;
        }
        return true;
    })
    .argv;

    module.exports = argv;
const fs = require('fs');
const colors = require('colors');
const crearTabla = async(base = 5,listar,hasta) =>{

    try{

        let salida = '';
        let consola = '';
        
        for(let i = 1; i<=hasta;i++){
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        if(listar){
            console.log('======================='.rainbow);
            console.log(`      TABLA DEL ${base}   `);
            console.log('======================='.rainbow);    
            console.log(consola);
        }
        const nombre_archivo= `tabla del ${base}.txt`;
        
        fs.writeFileSync(`./salida/${nombre_archivo}`, salida);
        return (nombre_archivo);
    }
    catch(err){
        throw (err);
    };        

}

module.exports = {
    crearTabla
}
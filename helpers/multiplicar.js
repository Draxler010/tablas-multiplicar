const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 1, listar = false, hasta = 10 ) => {    
    
    try {
        let salida = '',
            consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } ${'X'} ${ i } = ${ base * i }\n`;
            consola += `${ base } ${'X'.red} ${ i } = ${ base * i }\n`;

        }

        if ( listar ) {
            console.log('==================='.green);
            console.log(`    TABLA DEL ${ colors.blue( base ) }`);
            console.log('==================='.green);
            
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt`;

    } catch (error) {
        throw error;
    }
}



module.exports = {
    crearArchivo
}
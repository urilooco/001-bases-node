const fs = require('fs'); //importamos el paquete de manipulación de archivos

let crearArchivo = (base, limite) =>{
    return new Promise((resolve, reject) =>{
        let tabla = '';

        if (!Number(base)){
            reject('Favor de insertar un número válido');
            return;
        }

        if(!Number(limite)){
            reject('Favor de insertar un límite válido');
            return;
        }

        for(let i = 1; i <= limite; i++){          
            tabla += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {
            //throw = trycatch para mostrar el error de una manera más "amigable"
            if(err){ 
                reject(err);
                // Si no hay errores muestra mensaje en consola
            }else{
                resolve(`tabla-${base}.txt`);
            }
        });
    });
};

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) =>{

        if (!Number(base)){
            reject('Favor de insertar un número válido');
            return;
        }

        if(!Number(limite)){
            reject('Favor de insertar un límite válido');
            return;
        }

        for(let i = 1; i <= limite; i++){
            console.log(`${base} x ${i} = ${base * i}`);
        }
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};
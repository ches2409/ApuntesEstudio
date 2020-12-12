"use strict";
(() => {
    const enviarMision = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    };
    const regresarCuartel = (xmen) => {
        console.log(`Regresando a ${xmen.nombre} al cuartel `);
    };
    const wolverine = {
        nombre: 'Logan',
        edad: 60
    };
    enviarMision(wolverine);
    regresarCuartel(wolverine);
})();

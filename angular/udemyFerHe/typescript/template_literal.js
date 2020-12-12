"use strict";
(function () {
    function getEdad() {
    }
    const nombre = 'Andres';
    const apellido = 'Gomez';
    const edad = 38;
    //const salida = nombre + ' ' + apellido + ' (' + edad + ')'
    // template literal
    // let salida = `${nombre} ${apellido} (edad: ${edad})`
    const salida = `
        ${nombre}
        ${apellido}
        (${getEdad()});
    `;
    console.log(salida);
})();

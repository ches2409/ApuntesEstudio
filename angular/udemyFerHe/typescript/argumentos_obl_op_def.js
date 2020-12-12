"use strict";
(function () {
    function activar(quien, //primero los obligatorios
    momento, // luego los opcionales
    objeto = 'Batiseñal' //por ultimo los default
    ) {
        if (momento) {
            console.log(`${quien} activó la ${objeto} en la ${momento}`);
        }
        else {
            console.log(`${quien} activó la ${objeto}`);
        }
    }
    activar('Andres', 'tarde');
})();

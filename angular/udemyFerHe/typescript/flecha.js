"use strict";
(function () {
    const miFuncion = function (a) {
        return a.toUpperCase();
    };
    function funcion2(a) {
        return a;
    }
    //arrow function
    const miFuncionF = (a) => a.toUpperCase();
    const sumarN = function (a, b) {
        return a + b;
    };
    const sumarF = (a, b) => a + b;
    console.log(miFuncion('normal'));
    console.log(miFuncionF('Flecha'));
    console.log(sumarN(2, 8));
    console.log(sumarF(5, 15));
    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            }, 1000);
        }
    };
    hulk.smash();
})();

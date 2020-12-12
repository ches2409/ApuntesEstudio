//===========================================================================
// JAVASCRIPT: Apuntes del curso Javascript EdTeam 2017
//===========================================================================
// tecnicas de escritura de codigo
/*
snake_case
    para nombrar ARCHIVOS 
    mi_archivo_javascript.js

UPPER_CASE
    para definir constantes
    const UNA_CONSTANTE = "esto es una constante";

UpperCamelCase
    para nombrar clases - cada inicial va en mayuscula
    class SerHumano {
        ...
    }

lowerCamelCase
    objetos - primitivos - funciones - instancias = primera letra en minuscula y luega cada inicial en mayuscula 

    objetos
    const unObjeto ={
        ...
    }

    primitivos
    let unaCadena = "texto";

    funciones
    function unaPrueba (parametros){
        ...
    }

ORDENAMIENTO DE CODIGO
1. Importación de Módulos.
2. Declaración de variables.
3. Declaración de funciones.
4. Ejecución de código.

TIPOS DE DATOS

1. PRIMITIVOS: Se accede directamente al valor
    * string
    * number
    * boolean
    * null
    * undefined
    * NaN 

2. COMPUESTOS: se accede a la referencia del valor.
    * object={}
    * array = []
    * function (){}
    * class {}
    * ...

*/


//alert('hola mundo');
console.log ('hola mundo a la consola');
console.dir();

// Variables: se declara con la palabra resevada "let", se usa "var " para variables globales
// ___________________________________________________________________________

let precio = 300000,
    utilNeta = 0.40,
    descuentoSt = 0,
    impuesto = precio * 0.19,
    utilidad = precio * utilNeta,
    descuento = precio * descuentoSt,
    precioFinal = precio + impuesto + utilidad - descuento;

let prueba = `precio de compra del producto: ${precio} + iva ${impuesto}% para un total a pagar de: ${precio+impuesto}`; //template string
console.log(prueba);

console.log ('Precio de compra: ', precio);
console.log('Aplica impuesto de: ', impuesto);
console.log('Descuento generado: ', descuento);
console.log('la utilidad es: ', utilidad);

console.log('El precio final es: ', precioFinal);

// operadores de imcremento o decremento
// ___________________________________________________________________________

let numero = 5;
console.log(numero++); // pos-incremento : se incrementa despues.
console.log(numero);
numero--;
console.log(numero);

console.log(++numero); // pre-incremento: incrementa antes
console.log(numero);

// +=, -+, *=, /= operaciones con el mismo valor
numero = numero + 5;
console.log(numero);

numero = 6;
// lo anterior se puede cambiar por

numero += 5;
console.log(numero);

// operadores de comparacion (devuelven boolean)

let condicion = 5<10; //expresion (toda porcion de codigo que devuelve un valor)
console.log(condicion);

// propiedades y metodos
// ___________________________________________________________________________
let nombre = 'Andres';
let ubicacion = nombre.indexOf('e'); //metodo - puede requerir parametros
let longitud = nombre.length; //propiedad
console.log(longitud,  ubicacion);


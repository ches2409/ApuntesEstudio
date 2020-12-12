// ===========================================================================
// 	SECTION clase 3: Variables
// ===========================================================================


let saludo = 'hola'
// console.log(`🚀 ~ saludo`, saludo)
console.log (saludo)

let nombre = 'Andres'
let apellido = 'Gomez'
console.log(nombre.length);

// !SECTION

// ===========================================================================
// 	SECTION clase 5: Cadenas de texto (strings)
// ===========================================================================
// El objeto String se utiliza para representar y manipular una secuencia de caracteres.

// declaracion de cadena de texto con su cosntructor

let cadenaCons = new String("cadena con constructor") // por su formalidad no es muy usada en la actualidad.
console.log(`cadena pos: ${cadenaCons} ${apellido}`);
console.log(cadenaCons)

console.log(apellido.toUpperCase());

let oracion = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
console.log(oracion.includes("ipsum"));

const sentence = "Esto es una prueba del metodo includes()";
const word = 'prueba';
console.log(`La palabra "${word}" ${sentence.includes(word) ? 'está' : 'no está'} en la oración`);

let espacios = "     cadena con espacios     ";
console.log(espacios);
console.log(espacios.trim());

// split

let separar = "cadena, para, separar";
console.log(separar.split(",", 2));
console.log(separar.split(","));

// parentesis de captura
/*
Si el separador contiene paréntesis de capturaI los resultados que concuerden son devueltos en el array.
*/
let miCadena = "Hola 1 mundo. oracion numero 2";
let divisor = miCadena.split(/(\u)/);
console.log(divisor);

let cadenaLarga = "Esta es una cadena larga y necesita" + 
                "ser dividida en varias lineas para" +
                "que sea mas legible el código";
console.log(cadenaLarga)

// !SECTION

// ===========================================================================
// 	SECTION Clase 6: Template strings
// ===========================================================================
// caracteristicas de las cadenas de texto: concatenacion e interpolacion

// concatenar = unir cadena de texto con variable
let ciudadUno = "Villavicencio";
let departamento = "Meta";
console.log("la ciudad de "+ciudadUno+" está ubicada en el "+departamento+".");

// interpolacion = incluir dentro de una cadena de texto el valor dinamicamente de una variable

let saludo2  = `Hola mi nombre es ${nombre} ${apellido}`
console.log (saludo2)

// concatenar codigo html
let estacion = "primavera"
let estacionesConcatenadas = "<ul>\n"+
    "\t<li>"+estacion+"</li>\n"+
    "\t<li>VeranoC</li>\n"+
    "\t<li>OtoñoC</li>\n"+
    "\t<li>InviernoC</li>\n"+
    "</ul>";
console.log(estacionesConcatenadas)

// interpolar el codigo html
let estaciones =`
<ul>
    <li>${estacion}</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
</ul>
`

console.log(estaciones)
// !SECTION

// ===========================================================================
// 	SECTION Clase 7: Numeros (Numbers)
// ===========================================================================
let aN = 2;
let bN = new Number(1);
let cN = 7.19;
let dN = "5.6";

//metodos y propiedades de los numeros

console.log('numeros:', aN, bN)
console.log(cN.toFixed(1)); // numeros decimales a mostrar
console.log(cN.toFixed(5));
console.log(parseInt(cN)); // devuelve la parte entera
console.log(parseFloat(cN)) // devuelve la parte decimal junto con la entera
console.log('dN: ', typeof(dN), 'cN: ', typeof(cN) );
console.log(aN + bN);
console.log(cN + dN); // concatena por ser cadena de texto "dN"
console.log(cN + parseInt(dN)); // convertir o hacer casting (cambio de tipo de dato) para hacer la operacion; solo suma la parte entera
console.log(cN + parseFloat(dN)); // suma la parte decimal


// !SECTION

// ===========================================================================
// 	SECTION Clase 8: Booleanos
// ===========================================================================
let verdaderoB = true;
let falsoB = false;


console.log(verdaderoB, falsoB);
console.log(typeof(verdaderoB));

//truthy / falsy
console.log(Boolean(0)); // falso
console.log(Boolean(-7)); // verdadero
console.log(Boolean("")); // falso
console.log(Boolean(" ")); // verdadero
/*
Valores que tienden a falso
false
null ==> ausencia de un valor intencional
undefined ==> variable sin definir (sin inicializar) y su valor está ausente
0
NaN ==> Not a Number, operaciones donde uno de los datos no es un numero
''
""
*/

// !SECTION


// ===========================================================================
// SECTION clase 10: funciones
// ===========================================================================


// se pueden declarar de dos maneras, declaradas y expresadas
/*
Una funcion es un bloque de código autocontenido, que se puede definir una vez y ejecutar en cualquier momento.
Opcionalmente, una funcion puede aceptar parámetros y devolver un valor
*/ 
/*
Las funciones en javascript son un tipo especial de objetos
*/

// funciones declaradas

function estoEsUnaFuncion (){
    console.log('🚀 uno')
    console.log('🚀 dos')
    console.log('🚀 tres')
}

//invocacion de funcion declarada
estoEsUnaFuncion()

//invocar funcion expresada
// funcionExpresada() // arroja error

// estoEsUnaFuncion()
// funcion que devuelve valor, se usa la palabra reservada "return"

function funcionDevuelveValor (){
    console.log('cuatro')
    console.log('cinco')
    return "La función ha retornado una Cadena de Texto"
}
let valorFuncion = funcionDevuelveValor()
console.log('🚀 ~ valorFuncion', valorFuncion)


// funcion con parámetros
// para asginar valores por defecto se iguala el valor a las variables
function saludar (nombre = 'desconocido', edad = 0){

    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`)
}

saludar('Edhrix', 20)
saludar()



function fxDeclarada (){
    console.log('esto es una función declarada, puede invocarse en cualquier parte del código, incluso antes de que la función sea declarada')
}
fxDeclarada()

// funciones como expresiones
// asginar funciones dinámicamente a una variable

//funcion anoninma
const funcionExpresada = function(){
    console.log('esto es una función expresada, es decir una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición, JS nos dira...')
}
funcionExpresada()
// !SECTION

// ===========================================================================
//SECTION Clase 11: Arreglos
// ===========================================================================
// ARRAYS []
const a =[]
const b =[1, true, 'hola', ['A', 'B', 'C']];
console.log(a)
console.log(b)
console.log(b.length)
//=========================== #region [notas] ===========================
// en los objetos compuestos se accede a la referencia del valor
console.log(b[2])
console.log(b[3][2])
//================================ #endregion ================================

const c = Array.of('x','y','z', 7,8,9)
console.log(c)

//inicializar un array y asignar a todas las posiciones el mismo valor ".fill()"
const d = Array(20).fill(10)
console.log(d)
//=========================== #region [warning] ===========================
//Modo en desuso para array	

const x = new Array('d','e','s','u','s','o');
console.log(x);
//================================ #endregion ================================

const colores = Array.of('Rojo','Amarillo','Azul','Blanco','Morado')
const colores2 = ['Purpura','Rosado','Magenta']
console.log(colores)
console.log(colores2)
// metodos
// agregar valores al final del array
colores.push('Negro')
console.log(colores)

// quitar el ultimo elemento del array
colores.pop()
console.log(colores)

//permite ejecutar una funcion por cada uno de los elementos q tenga el array ".forEach()"
colores.forEach(function(el,index){ //index=> i
    console.log(`<li id='${index}'>${el}</li>`)
})
//!SECTION
// ===========================================================================
// SECTION Clase 12: Objetos
// ===========================================================================
//object {}
const e ={}
console.log(e);
//=========================== #region [warning] ===========================
//modo de nombrar objetos en desuso	

const y = new Object();
//================================ #endregion ================================
// RESUMEN
//un objeto es una colección de llaves valores
// Dentro de un objeto, a las variables se les van a llamar atributos o  propiedades
// a las funciones se les llama métodos
const andres = {
    nombre: 'Andres',
    apellido:'Gomez',
    edad:37,
    pasatiempos:['videojuegos', 'cine', 'programar', 'diseñar'],
    soltero:false,
    contacto:{
        email:'andresg2409@gmail.com',
        wathsapp: 3147234097
    },
    saludo:function () {
        console.log('hola')
    },
    decirNombre: function () {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }
}
console.log(andres["nombre"]) //acceder al indice
console.log(andres.apellido) // acceder al atributo del objeto => mas usada
console.log(andres.edad)
console.log(andres.pasatiempos[1])
console.log(andres.contacto.email)
andres.saludo()
andres.decirNombre()

console.log(Object.keys(andres)) //lista las llaves del objeto
console.log(Object.values(andres)) // lista los valores
console.log(andres.hasOwnProperty("nombre")) // evaluar si el nombre de propiedad se encuentra entre las llaves del objeto

// !SECTION

// ===========================================================================
// SECTION Clase 13: Tipos de operadores
// ===========================================================================
// operadores aritméticos
let oA = 5+25-10*3; 
console.log(oA)

let modulo = 5%2;
console.log(modulo)

// operadores relacionales
// <,>,<=,>=, ==, ===, !=, !==*/

// operadores de incremento y decremento
let oI = 2

// oI = oI + 2
// oI += 2
console.log(oI++) // valor = 2
// console.log(++oI) // valor = 4 => toma el valor de oI, suma la siguiente linea (3) y luego imcrementa de nuevo para mostrar la variable final


//operador unario
oI++
oI--
++oI
--oI
console.log(oI)

/* operadores lógicos
// RESUMEN
!-Not = negacion: lo verdadero lo vuelve falso y viceversa
|| - Or = cuando hay dos o mas condiciones, conque una se cumpla , el Or validará
&& - And = Cuando todas las condiciones se cumplen es verdadero (valida)
*/

console.log(!true);
console.log((9===9)||("9"===9));
console.log((9 === 9) && ("9" === 9));

// !SECTION

// ===========================================================================
// SECTION Clase 14: Condicionales
// ===========================================================================
//estructuras de control = mecanismo q permite controlar el flujo del programa
//secuenciales, condicionales y loops (repetitivas)

// #########################################################
// IF - ELSE
// #########################################################

let edad = 19
if(edad > 18){
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}

// #########################################################
// operador ternario
// #########################################################
console.log("operador ternario");
let eresMayor = (edad>=18)?"eres mayor de edad":"Eres menor de edad"
console.log(eresMayor)

// #########################################################
// SWITCH - CASE
// #########################################################
/*
// RESUMEN
Domingo  = 1
Lunes    = 2
martes   = 3
mieroles = 4
jueves   = 5
viernes  = 6
sabado   = 7
*/

switch(5){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Lunes");
        break;
    case 3:
        console.log("Martes");
        break
    case 4:
        console.log("Miercoles");
        break
    case 5:
        console.log("Jueves");
        break
    case 6:
        console.log("Viernes");
        break
    case 7:
        console.log("Sabado");
        break

}

// !SECTION

// ===========================================================================
// SECTION Clase 15: Ciclos (loops)
// ===========================================================================
// #########################################################
// TEMA while
// #########################################################
let contador = 0
while (contador<10){
    console.log("while "+contador);
    contador++;
}
// #########################################################
// TEMA do while
// #########################################################
do{
    console.log("do-while "+contador);
    contador++;
}while(contador<10);

// #########################################################
// TEMA for
// #########################################################
/* NOTA SINTAXIS
for (inicialización de variable; condición; decremento o incremento){
    sentencias que ejecuta el for
}
*/
for (let i = 0; i < 10; i++) {
    console.log("for "+i);
}
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for(let i=0;i<numeros.length;i++){
    console.log(numeros[i]);
}
// variantes de for
// #########################################################
// TEMA for - if
// #########################################################
/*
Permite recorrer o iterar las propiedades de un objeto primitivo
*/
const creando ={
    nombre   : "Creando Web Studio",
    Actividad: "Agencia de marketing Digital",
    Contacto : "Andres Gomez",
    Email    : "info@creandoweb.com.co",
    telefono : "3147234097"
} 
for (const propiedad in creando) {
    console.log(`Key:${propiedad},Value:${creando[propiedad]}`);
}
// #########################################################
// TEMA For-of
// #########################################################
/*
Permite recorrer todo los elementos de cualquier objeto que sea iterable (partir en pequeños elementos)
*/
for(const elemento of numeros){
    console.log(elemento)
}

let cadena = "Hola mundo"
for(const caracter of cadena){
    console.log(caracter)
}
// !SECTION
// ===========================================================================
// SECTION clase 16: Manejo de errores
// ===========================================================================
try {
    console.log("en el try se agrega el código a evaluar");
    sinDeclarar
    console.log("segundo mensaje del try");
} catch (error) {
    console.log("captura cualquier error surgido en el try");
    console.log(error);
}finally{
    console.log("el bloque finally se ejecutará siempre al final de un bloque try-catch");
}
//ejemplo
try {
    let numero = "5"
    if(isNaN(numero)){
        throw new Error("El caracter introducido no es un número");
    }
    console.log(numero*numero);
} catch (error) {
    console.log(`Se produjo el siguiente error:${error}`);
}
// !SECTION
// ===========================================================================
// SECTION Clase 17: Break & Continue
// ===========================================================================
const numeros2 = [1,2,3,4,5,6,7,8,9,0];
for(let i=0; i<numeros2.length;i++){
    if(i===5){
        break;
    }
    console.log(i);
}
for(let i=0;i<numeros2.length;i++){
    if(i===5){
        continue;
    }
    console.log(numeros2[i]);
}
// !SECTION
// ===========================================================================
// SECTION Clase 18: Destructuración
// ===========================================================================
const numeros3 =[1,2,3]
// sin destructuración
let uno  = numeros3[0],
    dos  = numeros3[1],
    tres = numeros3[2]

console.log(uno, dos, tres);

// con destructuración
const[one, two, three] = numeros3;
console.log(one,two,three);

const empresa={
    razon:"Creando",
    ciudad:"Pitalito",
    url:"www.creandoweb.com.co"
}
let {razon,ciudad,url}=empresa;
console.log(razon, ciudad, url);
// !SECTION

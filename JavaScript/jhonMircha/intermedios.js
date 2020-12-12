// ===========================================================================
// SECTION Clase 19: Objetos literales
// ===========================================================================
let nombre1 = "lukas",
    raza1="labrador";
const perro={
    nombre1:nombre1,
    raza1:raza1,
    comando:function(){
        console.log("¡¡arriba!!");
    }
}
console.log(perro);
perro.comando();
// NOTA ecmascript
const dog={
    nombre1,
    raza1,
    edad:2,
    coman2() {
        console.log("¡¡sentado!!");
    }
}
console.log(dog)

dog.coman2()

// !SECTION

// ===========================================================================
// SECTION Clase 20: Parámetros REST & Operador Spread
// ===========================================================================
/* 
TEMA REST
Son una forma de agregar parametros infinitos a una funcion o a una variable, para definir parametros rest se anteponen 3 puntos suspensivos
*/
function sumar (a,b, ...c){
    let resultado = a+b;
    c.forEach(function(n){
        resultado+=n
    });
    return resultado;
}
console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5));
/*
TEMA Operador de Propagación / Spread Operator
nos permite expandir una expresion para almacenar multiples elementos
*/
const arr1 = [1,2,3,4,5],
    arr2=[6,7,8,9,0];
console.log(arr1,arr2);

const arr3 = [...arr1, ...arr2];
console.log(arr3);

// !SECTION
// ===========================================================================
// SECTION Clase 21: Arrow Functions
// ===========================================================================
/*
mejora la forma de escribir las funciones anonimas (expresada)
*/
const saludo = function(){
    console.log("hola");
}
saludo();

// Arrow Function
const saludar =()=>{
    console.log("hi");
}
saludar();
// cuando la funcion tiene una sola linea se expresa de la siguiente manera (se omiten las llaves[])
const saludar2=()=>console.log("buenas");
saludar2();
// agregar parámetros, no es necesario colocar parentesis() siempre y cuando solo sea un parámetro
const saludos=nombre=>console.log(`hola ${nombre}`);
saludos("Juan");

// const suma = function (a,b){
//     return a+b;
// }
const suma = (a,b)=>a+b; //return implícito
console.log(suma(8,5));

//funcion de varias lineas

const funcionMultiLinea=()=>{
    console.log("uno");
    console.log("dos");
    console.log("tres");
}
funcionMultiLinea();

const numeros = [1,2,3,4,5];
// numeros.forEach(function(el, index){
//     console.log(`el elemento ${el} esta en la poscición ${index}`);
// })
//con arrow function
numeros.forEach((el,index)=> console.log(`${el} esta en la posición ${index}`));
//las arrow function capturan el objeto "this" en el contexto donde se encuentra
// function gato(){
//     console.log(this);
// }
// gato();
// los metodos en un objeto literal no se deben crear con arrow function por su contexto global, en cambio se puede usar la nueva sintaxis la cual si reconocerá el contexto en el que se encuentra
const gato ={
    nombre2 : "lukas",
    // mauyar:function(){
    mauyar(){ //nueva sintaxis
        console.log(this)
    }
}
gato.mauyar();
// !SECTION

// ===========================================================================
// SECTION Clase 22: Prototipos
// ===========================================================================
/*
TEMA POO
Dentro de la Programación Orientada a Objetos, hay 4 conceptos importantes
clases = Modelo a seguir
objetos = Una instancia de una clase
    atributos = Caracteristica o propiedad del objeto (variables dentro del objeto)
    metodos = son las acciones que un objeto puede realizar (son funciones dentro de un objeto)

*/
/*
const animal={
    nombre:"droppy",
    sonar(){
        console.log("hola amigos");
    }
}
const animal2={
    nombre:"correcaminos",
    sonar() {
        console.log("bep bep");
    }
}
console.log(animal);
console.log(animal2);
*/
// NOTA funcion constructora
/*
Para evitar el copiar y pegar del ejemplo anterior se usan las clases.
para generar un prototipo en el cual basarse y generar N cantidad de su modelo (en este ejemplo Animales) se crea una funcion (funcion constructora) con la cual se generan nuevos objetos a partir de ella
para escribir el nombre de la funcion se hace con UpperCamelCase 
*/
//funcion constructora 1
// function Animal (nombre, genero){
//     //atributos
//     this.nombre=nombre;
//     this.genero=genero;
//     this.raza=raza;
//     // metodos
//     this.sonar=function(){
//         console.log("sonido tipico");
//     }
// }
//funcion constructora donde asignamos los metodos al prototipo, no a la funcion como tal
function Animal(nombre, genero,raza) {
        //atributos
        this.nombre = nombre;
        this.genero = genero;
        this.raza = raza;
        // metodos agregados al prototipo de la función constructora
        Animal.prototype.sonar = function () {
            console.log("sonido tipico");
        }
    }
const droopy     = new Animal("Droopy", "macho","perro"),
    correcaminos = new Animal("Correcaminos", "macho","Ave"),
    tomas        = new Animal ("Tomas", "macho","gato"),
    bugsBunny    = new Animal ("Bugs Bunny", "macho", "conejo")
    console.log(droopy)
    console.log(correcaminos)
    console.log(tomas)
    // droopy.sonar()

// !SECTION

// ===========================================================================
// SECTION Clase 23: Herencia Prototípica
// ===========================================================================
function Motos(cilindraje, linea,tipo){
    this.cilindraje=cilindraje;
    this.linea=linea;
    this.tipo=tipo;
    Motos.prototype.notas=function(){
        console.log("La favorita");
    }
}
// Herencia

function Kawasaki(cilindraje, linea, tipo, modelo){
    this.super=Motos;
    this.super(cilindraje,linea,tipo);
    this.modelo=modelo;
}

// kawasaki esa heredando de motos
Kawasaki.prototype=new Motos();
Kawasaki.prototype.constructor=Motos;

//Sobreescritura de métodos del prototipo padre en el hijo
Kawasaki.prototype.notas=function(){
    console.log("esta es mi favorita");
}

Kawasaki.prototype.objetivo=function(){
    console.log("para el año 2022");
}

const victory = new Motos (150, "MRX", "Enduro", "2021"),
    versys =new Motos (650, "NA", "Alta Gama", 2021),
    agility = new Motos(125, "NA", "Moped", 2021),
    Z=new Kawasaki(400, "Z", "Alta Gama", 2021)

console.log(victory);
console.log(versys);

console.log(Z);
Z.notas();
Z.objetivo();

// !SECTION
/*=============================================
CLASES

Las clases, son funciones constructoras y siempre las vamos a iniciar con Mayúscula

ejemplo: new String()
=============================================*/

/*=============================================
CLASES PRIMITIVAS
=============================================*/
// Clase String
var string = new String("Esto es un string")
console.log("string", string);

// Clase Number
var number = new Number(12);
console.log("number", number);

// Clase Boolean
var boolean = new Boolean(false);
console.log("boolean", boolean);

/*=============================================
CLASES COMPUESTAS
=============================================*/
// Clase Array
var array = new Array("rojo","amarillo","verde")
console.log("array", array);

//Clase Object
var object = new Object({nombre:"Pedro",
						edad:30})
console.log("object", object);

/*=============================================
CLASES CREADAS POR EL PROGRAMADOR
=============================================*/
//Creamos el Prototipo

function Persona(){

	//Propiedades Públicas
	this.nombre;
	this.edad;

}

var yo = new Persona();
yo.nombre = "Juan";
yo.edad = "21 años";
console.log("yo", yo);

//Clases con parámetros
function Animales(nombre, raza){

	this.nombre = nombre;
	this.raza = raza;
}

var mascota = new Animales("perro","pitbul");
console.log("mascota", mascota);

// ======================================================================
//	ejercicios
// ======================================================================

// asignar valores desde las propiedades

function Heroes() {
	//propiedades públicas
	this.nombre;
	this.caracteristica;
	this.universo;
}
let heroe = new Heroes();
heroe.nombre = "Black Widow";
heroe.caracteristica = "Experta en combate";
heroe.universo = "Marvel";

console.log(`Heroe: nombre - ${heroe.nombre}, Caracteristica - ${heroe.caracteristica}`)
console.log("heroe", heroe);

//asignar valor desde los parámetros

function VideoJuegos(nombre, genero, consola) {
	this.nombre = nombre;
	this.genero = genero;
	this.consola = consola
}
let miJuego = new VideoJuegos('Resident Evil', 'Terror', 'xbox') //instancia la clase VideoJuegos
console.log(`Mi videojuego favorito es ${miJuego.nombre} del genero ${miJuego.genero}`)
console.log("miJuego", miJuego);







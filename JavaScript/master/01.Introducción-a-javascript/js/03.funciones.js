/*=============================================
FUNCIONES SIN PARÁMETROS
=============================================*/
var globales = 10;
console.log("globales", globales);

// Declaramos la función
function saludo(){

	//Tarea de la función
	console.log("saludo","hola")

}

//Ejecutamos la función
saludo();


/*=============================================
FUNCIONES CON PARÁMETROS
=============================================*/
function operacion(digito1, digito2){

	var resultado = digito1 + digito2;
	globales = resultado;
	console.log("globales_operacion", globales);
	console.log("resultado", resultado);

}

operacion(5,7);
operacion(10,5);

/*=============================================
FUNCIONES CON RETORNO SIN PARÁMETROS
=============================================*/
function retorno1(){

	var numero = 5;
	return numero;
}

console.log(retorno1())

/*=============================================
FUNCIONES CON RETORNO CON PARÁMETROS
=============================================*/

function retorno2(numero){

	return numero;
}

console.log(retorno2(10));
console.log(retorno2(20));
console.log(retorno2(30));

/*=============================================
Ejercicios
=============================================*/
function universoMarvel(index) {
	const personajesMarvel = [
		'Iron Man',
		'Spider Man',
		'Dr Strange',
		'Hulk',
		'Capitan América'
	]
	const atributoHeroe=[
		'Tecnológico',
		'Sentidos desarrollados',
		'manejo de Energia',
		'Fuerza',
		'Mejora genética'
	]
	const $universo     = document.querySelector('.marvel');
	const $hero         = document.getElementById('nombre')
	const $marvel       = document.querySelector('.heroe');
	const $personalidad = document.querySelector('.caracter');
	const $descriptivo  = document.querySelector('.descripcion');
	
	$universo.style.height = "200px";
	// $universo.style.width = "100vw";
	$universo.style.setProperty("width", "100vw");
	// console.log($universo)
	// console.log($marvel);
	$marvel.setAttribute("data-persona", `${personajesMarvel[index]}`)
	// console.log(document.getElementsByClassName("caracter")) // en desuso
	// console.log(document.querySelector(".caracter"));
	// console.log("Este es un personaje del $universo Marvel", "-",personajesMarvel[index],"-")
	console.log(`Este es un personaje del universo Marvel - ${personajesMarvel[index]} -`) //interpolado
	
	let personaje =`
		${personajesMarvel[index]}
	`;
	let atributo=`
		${atributoHeroe[index]}
	`;
	$marvel.textContent = personaje;
	$personalidad.innerHTML = atributo;

	switch (index) {
		case 0:
			// console.log(`Personaje del universo Marvel - ${personajesMarvel[index]} -`)
			$universo.style.background = "orange";
			$hero.style.color="red";
			break;
		case 1:
			// console.log(`El personajes es - ${personajesMarvel[index]} -`)
			$universo.style.background = "red";
			$hero.style.color="blue";
			break;
		case 2:
			// console.log(`El personajes es - ${personajesMarvel[index]} -`)
			$universo.style.background = "gold";
			$hero.style.color="brown";
			break;
		case 3:
			// console.log(`El personajes es - ${personajesMarvel[index]} -`)
			$universo.style.background = "green";
			$hero.style.color="white";
			break;
		case 4:
			// console.log(`El personajes es - ${personajesMarvel[index]} -`)
			$universo.style.background = "blue";
			$hero.style.color="red";
			break;
		default:
			$marvel.textContent = `Sin heroe`;
			$descriptivo.outerHTML = `
				<p>Elija un numero entre 0 y 4</p>
			`;
			break;
	}
	return personajesMarvel[index];
}
// universoMarvel(3)
// function solicitaPersonaje() {

// 	let personaje = Number(window.prompt('Por favor inserta un valor entre o y 4', '0 a 4'));
	
// 	// const $numero = document.getElementById('numero');
// 	const $valor = document.querySelector('.valor');
// 	$valor.innerHTML = `
// 		${personaje}
// 	`;
// 	// console.log(`El numero corresponde a: ${personaje}`);
// 	return personaje;
// }
// let personajeSelec = solicitaPersonaje();
// // console.log(`la seleccion es ${personajeSelec}`)
// universoMarvel(personajeSelec);

// setTimeout(function() {
// 	alert (`Su personaje favorito es ${universoMarvel(personajeSelec)}`)
// },3000)

/*
===================================================================================================+
|-------------------------------------ejercicio de algoritmos--------------------------------------|
+==================================================================================================
*/


function algoRes(a, b) {
	let e = a;
	let i = b;
	let f = 0;
	let g = 0;
	// if(e < i){
	// 	console.log(`e es menor que i : ${i}`);
	// 	e = e + e++;
	// 	console.log(`e pasa a ser ${e}`);
	// }
	// console.log(` la diferencia entre estos numeros es: ${f}`);
	// if(a < b){
		while (e < i) {
			console.log(`e es menor que i - e: ${e}`);
			console.log(`e : ${e}`);
			
			
			
			g = e++;
			console.log(`e vale ${e}`);
			if(e < i){
				f = g + e;
				console.log(`lIi ${f}`);
				
			}
			
		}
	}

algoRes(2, 5);

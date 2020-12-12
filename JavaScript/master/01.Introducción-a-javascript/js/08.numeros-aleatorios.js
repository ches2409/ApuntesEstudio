// let numeroAleatorio = document.querySelector("#numeroAleatorio");
let numeroAleatorio = document.getElementById("numeroAleatorio");
let numeroRandom = document.querySelector('.numeroRandom');
let numero = 0;

/*=============================================
NÚMEROS ALEATORIOS

El objeto Math permite realizar tareas matemáticas en los números.
Math.random = devuelve un número aleatorio entre 0 (inclusive), y 1 (exclusivo) 
Math.floor = redondea al número menor del decimal
Math.ceil = redondea al número mayor del decimal
Math.round = devuelve el valor de x redondeado a su número entero más próximo
=============================================*/

numero = Math.random();
numero = Math.floor(Math.random()*10); // redondea al menor
numero = Math.ceil(Math.random()*10); // redondea al numero mayor del decimal
numero =Math.round(Math.random()*10)
console.log(`numero: ${numero}`)
// numeroAleatorio.innerHTML = numero;
// numeroAleatorio.innerHTML='El número aleatorio es: ';
// numeroRandom.textContent=numero;
numeroAleatorio.outerHTML=`
	<p id="numeroAleatorio">El numero aleatorio es: <span class="numeroRandom">${numero}</span></p>
`;



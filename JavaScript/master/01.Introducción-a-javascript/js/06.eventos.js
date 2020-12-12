// var recuadro = document.querySelector("#recuadro");
var recuadro = document.getElementById("recuadro");

/*=============================================
EVENTOS DESDE EL DOM
=============================================*/

function cambiarColor(){

	recuadro.style.background = "red";
	recuadro.style.width="350px";
	recuadro.style.transition="1s ease"

}

/*=============================================
EVENTOS DESDE JAVASCRIPT
=============================================*/
// var boton = document.querySelector("#boton");
let boton = document.querySelector("#boton");

boton.addEventListener("click",moverCaja)

function moverCaja() {
	recuadro.style.background="orange";
	recuadro.style.width="450px";
	recuadro.style.transition="1s ease"
}


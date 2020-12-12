/*=============================================
VARIABLES
=============================================*/
// Variables Numericas
var numero = 8
console.log("numero", numero);

// Variables de texto // strings
var palabra = "string";
console.log("palabra", palabra);

//Variables Boleanas
var boleana = true;
console.log("boleana", boleana);

// Variables de tipo Arreglo (Array)
var colores = ["rojo","amarillo", "azul", numero]
console.log("colores", colores[2], numero);

//Variables de tipo objeto (object: propiedad y el valor)
var jugo = {ingrediente1:"fresa",
			ingrediente2:"mandarina",
			ingrediente3:"banano"}
console.log("jugo", jugo.ingrediente3);

// Variables DOM ('Modelo de Objetos del Documento')
/*El DOM es la estructura de objetos que genera el navegador cuando se carga un documento y se puede alterar mediante javascript para cambiar dinámicamente los contenidos y aspecto de la página.*/
var caja = document.querySelector("#caja");
console.log("caja", caja);

caja.style.width = "200px";
caja.style.border = "solid 5px green";
caja.style.height = "200px";
caja.style.background = "blue";
caja.style.borderRadius = "50%";

var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);






/*=============================================
CICLO FOR
=============================================*/

var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);
// cajas[1].style.width = "50px";
// cajas[1].style.height = "50px";
// cajas[1].style.background = "cadetBlue";
// cajas[1].style.marginTop = "5px";
// cajas[1].style.marginRight = "5px";
// cajas[1].style.display = "inline-block";

for(var i = 0; i < cajas.length; i++){

	cajas[i].style.width = "50px";
	cajas[i].style.height = "50px";
	cajas[i].style.borderRadius = "50%";
	cajas[i].style.background = "cadetBlue";
	// cajas[i].style.marginTop = "5px";
	// cajas[i].style.marginRight = "5px";
	cajas[i].style.margin = "5px 5px 5px 0";
	cajas[i].style.display = "inline-block";

}


for(var i = 1; i <= 5; i++){
    
    console.log("i", i);

}

/*=============================================
CICLO WHILE
=============================================*/
var n = 1;

while(n <= 5){
	console.log("n", n);
	n++;	
}

/*=============================================
CICLO DO WHILE
=============================================*/

var p = 1;

do{
	console.log("p", p);
	p++	
}

while(p <= 5);





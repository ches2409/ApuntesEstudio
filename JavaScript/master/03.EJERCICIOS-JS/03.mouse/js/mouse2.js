// ======================================================================
//	Objeto con propiedades del mouse
// ======================================================================

let pm = {
    zona : document.querySelector('#contenedorMouse #efectoMouse'),
    figuras : document.querySelectorAll('#contenedorMouse #efectoMouse figure'),
    mouseX : 0,
    mouseY : 0,
    horizontal : false,
    vertical : false,
    combinado : true,
}


// ======================================================================
//	Objeto con Metodos del mouse
// ======================================================================

let mm = {
    inicioMouse : function () {

        pm.zona.addEventListener('mousemove', mm.movimientoMouse);

        for(let i = 0; i < pm.figuras.length; i++){
            pm.figuras[i].innerHTML =`<img src="img/mouse/plano0${i}.png">`; //interpolado
            // pm.figuras[i].innerHTML = '<img src="img/mouse/plano0'+i+'.png">'; //concatenado
            pm.figuras[i].style.zIndex = -i;
        }
        setTimeout(() => {
            pm.zona.style.height = pm.figuras[0].childNodes[0].height / 1.22 +'px';
        }, 100);
        
        
        
    },
    movimientoMouse : function (mouse) {

        // pm.cursor = mouse.offsetX, mouse.offsetY;
        // console.log(mouse.offsetX, mouse.offsetY);

        pm.mouseX = mouse.offsetX;
        pm.mouseY = mouse.offsetY;

        

        for(let i = 0; i < pm.figuras.length; i++){

            if(pm.horizontal){
                pm.figuras[i].style.left = -pm.mouseX / (i*100+50) + '%';
            }
            if(pm.vertical){
                pm.figuras[i].style.top = -pm.mouseY / (i*100+50) + '%';
            }
            if(pm.combinado){
                pm.figuras[i].style.left = -pm.mouseX / (i*100+50) + '%';
                pm.figuras[i].style.top = -pm.mouseY / (i*100+50) + '%';
            }
            
        }
    }
}

mm.inicioMouse();
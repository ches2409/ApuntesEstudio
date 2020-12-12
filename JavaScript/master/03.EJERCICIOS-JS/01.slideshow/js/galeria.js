// ======================================================================
//	Objeto con propiedades de la galeria
// ======================================================================
let pg = {

    imgGaleria : document.querySelectorAll('#galeria ul li img'),
    rutaImagen : null,
    cuerpoDom : document.querySelector('body'),
    lightBox : null,
    modal : null,
    animacionGaleria : 'fade',
}
// ======================================================================
//	objeto con metodos de la galeria
// ======================================================================
let mg = {
    inicioGaleria : function () {
        console.log(pg.imgGaleria)

        for(let i = 0; i < pg.imgGaleria.length; i++){
            pg.imgGaleria[i].addEventListener('click', mg.capturaImagen);
        }
        
    },
    capturaImagen :function(img) {

        pg.rutaImagen = img.target
        mg.lightBox(pg.rutaImagen)
    },
    lightBox : function(img) {
        pg.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightBox');
        pg.lightBox = document.querySelector('#lightBox');

        pg.lightBox.style.width = '100%';
        pg.lightBox.style.height = '100%';
        pg.lightBox.style.position = 'fixed';
        pg.lightBox.style.zIndex = '20';
        pg.lightBox.style.background ='rgba(0, 0, 0, 0.9)';
        pg.lightBox.style.top = '0';
        pg.lightBox.style.left = '0';

        pg.lightBox.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
        pg.modal = document.querySelector('#modal');

        pg.modal.innerHTML = img.outerHTML+'<div>x</div>';

        pg.modal.style.display = 'block';
        pg.modal.style.position = 'relative';

        pg.modal.childNodes[0].style.width ='100%';
        pg.modal.childNodes[0].style.border ='15px solid white';
        pg.modal.childNodes[0].style.borderRadius = '1%';


        if(window.matchMedia("(max-width:1000px)").matches){
            pg.modal.style.width = '90%';
        }else{
            pg.modal.style.width = '60%';
        }

        // animaciones galeria

        if(pg.animacionGaleria == 'slide'){
            pg.modal.style.top = '50%';
            pg.modal.style.left = 0;
            pg.modal.style.opacity = 0;

            setTimeout(() => {
                pg.modal.style.transition = '.7s left ease';
                pg.modal.style.left = '50%';
                pg.modal.style.opacity = 1;
                pg.modal.style.marginLeft = -pg.modal.childNodes[0].width/2 + 'px';
                pg.modal.style.marginTop = -pg.modal.childNodes[0].height/2 + 'px';
            }, 50);
        }

        if(pg.animacionGaleria == 'slideTop'){
            pg.modal.style.top = '-100%';
            pg.modal.style.left = '50%';
            pg.modal.style.opacity = 0;

            setTimeout(() => {
                pg.modal.style.transition = '.7s top ease';
                pg.modal.style.top = '50%';
                pg.modal.style.opacity = 1;
                pg.modal.style.marginLeft = -pg.modal.childNodes[0].width/2 + 'px';
                pg.modal.style.marginTop = -pg.modal.childNodes[0].height/2 + 'px';
            }, 50);
        }

        if(pg.animacionGaleria == 'fade'){
            pg.modal.style.top = '50%';
            pg.modal.style.left = '50%';
            pg.modal.style.opacity = 0;

            setTimeout(() => {
                pg.modal.style.transition = '.5s opacity ease-in-out';
                pg.modal.style.opacity = 1;
                pg.modal.style.marginLeft = -pg.modal.childNodes[0].width/2 + 'px';
                pg.modal.style.marginTop = -pg.modal.childNodes[0].height/2 + 'px';
            }, 50);
        }

        // Fin animacion galeria

        pg.modal.childNodes[1].style.position = 'absolute';
        pg.modal.childNodes[1].style.right = '5px';
        pg.modal.childNodes[1].style.top = '5px';
        pg.modal.childNodes[1].style.color = 'green';
        pg.modal.childNodes[1].style.cursor = 'pointer';
        pg.modal.childNodes[1].style.fontSize = '30px';
        pg.modal.childNodes[1].style.width = '40px';
        pg.modal.childNodes[1].style.height = '40px';
        pg.modal.childNodes[1].style.textAlign = 'center';
        pg.modal.childNodes[1].style.background = 'white';
        pg.modal.childNodes[1].style.borderRadius = '0 0 0 25%'

        pg.modal.childNodes[1].addEventListener('click', mg.salirGaleria)

    },
    salirGaleria : function() {

        // console.log(pg.lightBox.parentNode);
        pg.lightBox.parentNode.removeChild(pg.lightBox);
    }
}
mg.inicioGaleria();
// ======================================================================
//	Objeto con propiedades del scroll
// ======================================================================


let ps = {
    posicionScroll: 0,
    articulos     : document.querySelectorAll('#scroll article'),
    cajaScroll    : document.querySelector('#scroll'),
    cabezote      : document.querySelector('header'),
    botones       : document.querySelectorAll('nav ul li a'),
    ruta          : null,
    intervalo     : null,
    destinoScroll : 0,
    padding       : 0,
}
let prueba = {
    nombrePropiedad : document.querySelectorAll('nodo'),
    nombrePropiedad : document.querySelector('nodo'),
}

// ======================================================================
//	Objeto con Metodos del scroll
// ======================================================================

let ms = {
    inicioScroll : function() {
        document.addEventListener('scroll', ms.efectoParallax);

        for(let i = 0; i < ps.botones.length; i++){
            ps.botones[i].addEventListener('click', ms.desplazamiento);
        }
    },
    
    efectoParallax:function() {

        ps.posicionScroll = window.pageYOffset;

        //*


        // console.log(ps.posicionScroll)

        if(ps.posicionScroll > 100){
            // ps.cabezote.style.backgroundColor = 'white';
            ps.cabezote.style.position = 'fixed';
            ps.cabezote.style.zIndex = 100;
            ps.padding = 80;
            // ps.cabezote.style.transition = '.8s ease';
        }else{
            // ps.cabezote.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            ps.cabezote.style.position = 'relative';
            ps.cabezote.style.zIndex = 0;
            ps.padding = 180;
            // ps.cabezote.style.transition = '.8s ease';
        }

        if(ps.posicionScroll > ps.cajaScroll.offsetTop-200){
            // console.log('limite')
            for(let i = 0; i< ps.articulos.length; i++){
                ps.articulos[i].style.marginLeft = 0;
            }
        }else{
                for(let i = 0; i < ps.articulos.length; i++){
                    ps.articulos[i].style.marginLeft = ps.posicionScroll/21.6-100+'%';
                    // console.log(ps.posicionScroll-100)
                
            }
        }
        // console.log(ps.posicionScroll);
    },

    desplazamiento : function(ruta) {
        // console.log(ruta.target.getAttribute('href'))
        ruta.preventDefault();

        ps.ruta = ruta.target.getAttribute('href'),

        ps.destinoScroll = document.querySelector(ps.ruta).offsetTop-ps.padding;
        console.log('ps.destinoScroll',ps.destinoScroll);

        ps.intervalo =setInterval(() => {

            if(ps.posicionScroll < ps.destinoScroll){
                
                ps.posicionScroll += 100;

                if(ps.posicionScroll >= ps.destinoScroll){
                    ps.posicionScroll = ps.destinoScroll;
                    clearInterval(ps.intervalo)
                }
            }else{

                ps.posicionScroll -= 100;

                if(ps.posicionScroll <= ps.destinoScroll){
                    ps.posicionScroll = ps.destinoScroll;
                    clearInterval(ps.intervalo)
                }
                
            }

            window.scrollTo(0, ps.posicionScroll)
        }, 50);

    }
}

ms.inicioScroll();
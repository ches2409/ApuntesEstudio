// ===========================================================================
// 	Objecto de propiedades: declaracion de propiedades del fomulario
// ===========================================================================

let pf = {
    entradas : document.querySelectorAll('input.validar'),
    valor : null,
    // mensajeSpan : document.querySelector(`[for="${input.target.id}"] .obligatorio`),

}

// ===========================================================================
// 	Objeto de metodos: declaración de metodos del formulario
// ===========================================================================

let mf = {
    inicioFormulario : function() {
        
        for (let i = 0; i < pf.entradas.length; i++) {

            pf.entradas[i].addEventListener('focus', mf.enFoco)

            
        }
    },
    enFoco : function(input) {

        pf.valor = input.target.value;
        // console.log(input.target.value);

        if(pf.valor == ""){
            // document.querySelector("#"+input.target.id).style.background = "rgba(255, 255, 0, .5)";
            // document.querySelector("[for="+input.target.id+"] .obligatorio").style.opacity = 1;

            document.querySelector(`#${input.target.id}`).style.background = "rgba(255, 255, 0, .5)";
            document.querySelector(`[for="${input.target.id}"] .obligatorio`).style.opacity = 1;
            document.querySelector(`[for="${input.target.id}"] .obligatorio`).style.color= "red";

        }
    }
}

mf.inicioFormulario();

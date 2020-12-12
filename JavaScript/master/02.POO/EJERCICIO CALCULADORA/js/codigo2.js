// ======================================================================
//	OBJETO CON LAS PROPIEDADES DE LA CALCULADORA
// ======================================================================
let p = {
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion : null,
    digito : null,
    operaciones : document.querySelector('#operaciones'),
    cantidadSignos : 0,
    cantidadDecimal : false,
    resultado : false,

}

// ======================================================================
//	OBJETO CON LOS METODOS DE LA CALCULADORA
// ======================================================================

let m = {
    inicio: function() {
        // console.log('hola')
        for(let i = 0 ; i < p.teclas.length; i++ ){
            // console.log('i', i)
            p.teclas[i].addEventListener('click', m.oprimirTecla)
        }
    },

    teclado : function() {
        document.addEventListener('keydown', m.oprimir);
    },
    oprimir:function(teclaT) {
        
        console.log(teclaT.keyCode);

        if(teclaT.keyCode == 48 || teclaT.keyCode == 96){
            p.accion = 'numero';
            p.digito = 0;            
        }
        if(teclaT.keyCode == 49 || teclaT.keyCode == 97){
            p.accion = 'numero';
            p.digito = 1;            
        }
        if(teclaT.keyCode == 50 || teclaT.keyCode == 98){
            p.accion = 'numero';
            p.digito = 2;            
        }
        if(teclaT.keyCode == 51 || teclaT.keyCode == 99){
            p.accion = 'numero';
            p.digito = 3;            
        }
        if(teclaT.keyCode == 52 || teclaT.keyCode == 100){
            p.accion = 'numero';
            p.digito = 4;            
        }
        if(teclaT.keyCode == 53 || teclaT.keyCode == 101){
            p.accion = 'numero';
            p.digito = 5;            
        }
        if(teclaT.keyCode == 54 || teclaT.keyCode == 102){
            p.accion = 'numero';
            p.digito = 6;            
        }
        if(teclaT.keyCode == 55 || teclaT.keyCode == 103){
            p.accion = 'numero';
            p.digito = 7;            
        }
        if(teclaT.keyCode == 56 || teclaT.keyCode == 104){
            p.accion = 'numero';
            p.digito = 8;            
        }
        if(teclaT.keyCode == 57 || teclaT.keyCode == 105){
            p.accion = 'numero';
            p.digito = 9;            
        }

        if(teclaT.keyCode == 88 || teclaT.keyCode == 106){
            p.accion = 'signo';
            p.digito = '*';            
        }
        if(teclaT.keyCode == 187 || teclaT.keyCode == 107){
            p.accion = 'signo';
            p.digito = '+';            
        }
        if(teclaT.keyCode == 189 || teclaT.keyCode == 109){
            p.accion = 'signo';
            p.digito = '-';            
        }
        if(teclaT.keyCode == 190 || teclaT.keyCode == 110){
            p.accion = 'signo';
            p.digito = '.';            
        }
        if(teclaT.keyCode == 111){
            p.accion = 'signo';
            p.digito = '/';            
        }
        if(teclaT.keyCode == 13){
            p.accion = 'igual';         
        }
        if(teclaT.keyCode == 8 || teclaT.keyCode == 46){
            m.borrarCalculadora();         
        }
        

        m.calculadora (p.accion, p.digito);
    },

    oprimirTecla : function(tecla) {
        p.accion = (tecla.target.getAttribute('class'));
        p.digito = tecla.target.innerHTML;

        m.calculadora (p.accion, p.digito);
    },
    calculadora : function(accion, digito) {
        switch (accion) {
            case "numero":
                p.cantidadSignos = 0;
                if(p.operaciones.innerHTML == 0){
                    p.operaciones.innerHTML = digito;
                }else{
                    if(p.resultado){
                        p.resultado = false;
                        p.operaciones.innerHTML = digito;
                    }else{
                        p.operaciones.innerHTML += digito;
                    }
                }

                break;
            case "signo":
                p.cantidadSignos++
                if(p.cantidadSignos == 1){
                    if(p.operaciones.innerHTML ==0 ){
                        p.operaciones.innerHTML = 0
                    }else{
                        p.operaciones.innerHTML += digito;
                        p.cantidadDecimal =false;
                        p.resultado = false;
                    }
                }
                
                break;
            case "decimal":
                if(!p.cantidadDecimal){
                    p.operaciones.innerHTML +=digito;
                    p.cantidadDecimal = true;
                    p.resultado = false;
                }
                
                break;
            case "igual":
                p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
                p.resultado = true;
                console.log(p.resultado)
                break;
        }
    },
    borrarCalculadora : function() {
        p.operaciones.innerHTML = 0;
        
    }
}
m.inicio();
m.teclado();
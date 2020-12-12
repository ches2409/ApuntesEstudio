(function(){
    function activar(quien:string, //primero los obligatorios
                    momento?:string, // luego los opcionales
                    objeto:string='Batiseñal' //por ultimo los default
                    ){
        if(momento){
            console.log(`${quien} activó la ${objeto} en la ${momento}`)
        }else{
            console.log(`${quien} activó la ${objeto}`)
        }
        
    }
    
    activar('Andres', 'tarde');
})();




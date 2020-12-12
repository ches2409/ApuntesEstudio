(()=>{
    interface Xmen{
        nombre:string;
        edad:number;
    }
    const enviarMision = (xmen:Xmen)=>{
        console.log(`Enviando a ${xmen.nombre} a la misión`)

    }

    const regresarCuartel = (xmen:Xmen)=>{
        console.log(`Regresando a ${xmen.nombre} al cuartel`)

    }

    const wolverine:Xmen={
        nombre:'Logan',
        edad:60
    }

    enviarMision(wolverine)
    regresarCuartel(wolverine)

})();





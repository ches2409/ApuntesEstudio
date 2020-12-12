(()=>{
    const avenger ={
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'Fuerza-habilidad-resistencia'
    }

    

    console.log(avenger.nombre)
    console.log(avenger.clave)
    console.log(avenger.poder)

    const {nombre, clave, poder} = avenger;

    console.log(nombre)
    console.log(clave)
    console.log(poder)
    
    const extraer =({nombre, poder}:any)=>{
        // const {nombre, clave, poder} = avenger;

        console.log(nombre)
        console.log(clave)
    }
    extraer(avenger)
    const avengers: string[]=['thor', 'ironman', 'spiderman'];
    const[uno, dos, tres]=avengers;

    console.log(uno)
    console.log(dos)
    console.log(tres)

    const extraerArr=(avengers:string[])=>{
        console.log(avengers[1])
        console.log(avengers[2])
        console.log(avengers[0])
    }
    extraerArr(avengers)

    const extraerArray=([thor, ironman, spiderman]:string[])=>{
        console.log(thor)
        console.log(ironman)
        console.log(spiderman)
    }
    extraerArray(avengers)

})();





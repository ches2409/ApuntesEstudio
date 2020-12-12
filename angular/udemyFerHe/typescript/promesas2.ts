(()=>{
    const retirarDinero=(montoRetirar:number):Promise<number> =>{
        
        let dineroActual = 1000;
        
        return new Promise((resolve, reject)=>{
            if (montoRetirar > dineroActual){
                reject('fondos insuficientes');
            }else{
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    }
    retirarDinero(250)
        .then(montoActual=>console.log(`Me queda ${montoActual}`))
        // .catch(err=>console.error(err));
        .catch(console.error);

})();





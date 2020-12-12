(function(){
    const miFuncion =function(a:string){
        return a.toUpperCase();
    }
    function funcion2(a:string){
        return a;
    }

    //arrow function
    const miFuncionF = (a:string)=> a.toUpperCase()

    const sumarN = function(a:number, b:number){
        return a+ b;
    }

    const sumarF = (a:number, b:number)=>a+b

    console.log(miFuncion('normal'));
    console.log(miFuncionF('Flecha'));
    console.log(sumarN(2, 8))
    console.log(sumarF(5, 15))

    const hulk ={
        nombre: 'Hulk',
        smash(){
            setTimeout(()=>{
                console.log(`${this.nombre} smash!!!`)
            },1000);
            
        }
    }
    hulk.smash();
})();




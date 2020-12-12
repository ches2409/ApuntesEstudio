/*=============================================
OBJETOS: Es una colección de propiedades y métodos
=============================================*/

var object = {

	// Una propiedad es una asociación entre un nombre y un valor. 
	nombre:"Juan",
	edad:31,
	// El método es una función dentro de un objeto.
	descripcion: function(){

		console.log("Su nombre es "+object.nombre+" y tiene "+object.edad+" años.") //concatenado
		console.log(`Su nombre es ${object.nombre} y tiene ${object.edad} años`) //interpolado

	},
	saludar: function(saludo){

		console.log(saludo+" "+object.nombre);
		console.log(`${saludo} estimad@ ${object.nombre}`);
	}

}

console.log("Nombre",object.nombre)
console.log("Edad",object.edad)
object.descripcion();
object.saludar("Buen día");


/*=============================================
OBJETOS PRIMITIVOS
=============================================*/

//El objeto Date se utiliza para trabajar con fechas y horas.
// https://www.w3schools.com/jsref/jsref_prototype_date.asp

var d = new Date();
console.log("d: ", d);
var y = d.getFullYear();
console.log("y: ", y);
let x = d.getDay();
console.log("x: ", x);
let w = d.getMonth();
console.log("w: ", w);

//Ejercicios de logica

/*=============================================
CASO 1. LOS CUATRO ATLETAS. 

De cuatro corredores de atletismo se sabe que C ha llegado inmediatamente detrás de B, y D ha llegado en medio de A y C. ¿Podría usted calcular el orden de llegada?

B -> 1
C -> 2
D -> 3
A -> 4
=============================================*/

let a = {
	A:0,
	B:0,
	C:0,
	D:0,

	resultado: function() {
		if(	a.C>a.B &&
			a.D>a.B &&
			a.D>a.C &&
			a.D<a.A
			){
				return true;
			}
				return false
	},
	intervalo : setInterval(() => {
		a.A = Math.ceil(Math.random()*4);
		a.B = Math.ceil(Math.random()*4);
		a.C = Math.ceil(Math.random()*4);
		a.D = Math.ceil(Math.random()*4);
		if (a.resultado()){
			clearInterval(a.intervalo);
			console.log(`Atleta A: ${a.A}`)
			console.log(`Atleta B: ${a.B}`)
			console.log(`Atleta C: ${a.C}`)
			console.log(`Atleta D: ${a.D}`)
		}
	}, 1)
}

/*=============================================
CASO 2. CABALLOS. 

El caballo de Mac es más oscuro que el de Smith, pero más rápido y más viejo que el de Jack, que es aún más lento que el de Willy, que es más joven que el de Mac, que es más viejo que el de Smith, que es más claro que el de Willy, aunque el de Jack es más lento y más oscuro que el de Smith. ¿Cuál es el más viejo, cuál el más lento y cuál el más claro?

Mac 	| tono: 4 (mas oscuro) 	| velocidad: 4 (mas rapido)	| edad: 4 (mas viejo)
jack 	| tono: 3 (oscuro) 		| velocidad: 1 (mas lento) 	| edad: 3 (viejo)
willy 	| tono: 2 (claro) 		| velocidad: 3 (rapido) 	| edad: 1 (mas joven)
smith 	| tono: 1 (mas claro) 	| velocidad: 2 (lento) 		| edad: 2 (joven)

=============================================*/

let b = {
	mac:{
		tono:0,
		velocidad:0,
		edad:0,
	},
	jack:{
		tono:0,
		velocidad:0,
		edad:0,
	},
	willy:{
		tono:0,
		velocidad:0,
		edad:0,
	},
	smith:{
		tono:0,
		velocidad:0,
		edad:0,
	},

	resultado : function() {
		if(	b.mac.tono > b.smith.tono &&
			b.mac.velocidad > b.jack.velocidad && b.mac.edad > b.jack.edad &&
			b.jack.velocidad < b.willy.velocidad &&
			b.willy.edad < b.mac.edad &&
			b.mac.edad > b.smith.edad &&
			b.smith.tono < b.willy.tono &&
			b.jack.velocidad < b.smith.velocidad && b.jack.tono > b.smith.tono
			){
				return true;
			}
			return false;
	},
	intervalo : setInterval(() => {
		// b.mac.tono = 4;
		// b.mac.velocidad = 4;
		// b.mac.edad = 4;

		// b.jack.tono = 3;
		// b.jack.velocidad = 1;
		// b.jack.edad = 3;

		// b.willy.tono = 2;
		// b.willy.velocidad = 3;
		// b.willy.edad = 1;

		// b.smith.tono = 1;
		// b.smith.velocidad = 2;
		// b.smith.edad = 2;



		b.mac.tono        = Math.ceil(Math.random()*2);
		b.mac.velocidad   = Math.ceil(Math.random()*2);
		b.mac.edad        = Math.ceil(Math.random()*2);

		b.jack.tono       = Math.ceil(Math.random()*2);
		b.jack.velocidad  = Math.ceil(Math.random()*2);
		b.jack.edad       = Math.ceil(Math.random()*2);

		b.willy.tono      = Math.ceil(Math.random()*2);
		b.willy.velocidad = Math.ceil(Math.random()*2);
		b.willy.edad      = Math.ceil(Math.random()*2);

		b.smith.tono      = Math.ceil(Math.random()*2);
		b.smith.velocidad = Math.ceil(Math.random()*2);
		b.smith.edad      = Math.ceil(Math.random()*2);


		if(b.resultado()){
			clearInterval(b.intervalo);
			console.log('el caballo de mac', b.mac);
			console.log('el caballo de jack', b.jack);
			console.log('el caballo de willy', b.willy);
			console.log('el caballo de smith', b.smith)
		}
	}, 1),
	
}

/*=============================================
CASO 3. LOS CUATRO PERROS. 

Tenemos cuatro perros: un galgo, un dogo, un alano y un podenco. Éste último come más que el galgo; el alano come más que el galgo y menos que el dogo, pero éste come más que el podenco. ¿Cuál de los cuatro perros come menos?.
=============================================*/
let c={
	galgo:0,
	dogo:0,
	alano:0,
	podenco:0,
	resultado : function() {
		if(
			c.podenco >c.galgo &&
			c.alano > c.galgo &&
			c.alano < c.dogo &&
			c.dogo > c.podenco
		){
			return true
		}
		return false
	},
	intervalo :setInterval(() => {

		c.galgo   = Math.ceil(Math.random()*4);
		c.dogo    = Math.ceil(Math.random()*4);
		c.alano   = Math.ceil(Math.random()*4);
		c.podenco = Math.ceil(Math.random()*4);

		if(c.resultado()){
			clearInterval(c.intervalo);
			console.log('galgo', c.galgo);
			console.log('dogo', c.dogo);
			console.log('alano', c.alano);
			console.log('podenco', c.podenco)

			if (c.galgo < c.dogo && c.galgo < c.alano && c.galgo < c.podenco){
				console.log('La raza de galgos es la que menos apetito tiene')
			}else if(c.dogo < c.galgo && c.dogo < c.alano && c.dogo < c.podenco){
				console.log('La raza de dogos es la que menos apetito tiene')
			}else if(c.alano < c.galgo && c.alano < c.dogo && c.alano < c.podenco){
				console.log('La raza de alanos es la que menos apetito tiene')
			}else{
				console.log('La raza de podencos es la que menos apetito tiene')
			}
		}
		
	}, 1)
}

/*=============================================
CASO 4. SEIS AMIGOS DE VACACIONES. 

Seis amigos desean pasar sus vacaciones juntos y deciden, cada dos, utilizar diferentes medios de transporte; sabemos que Alejandro no utiliza el coche ya que éste acompaña a Benito que no va en avión. Andrés viaja en avión. Si Carlos no va acompañado de Darío ni hace uso del avión, podría Vd. decirnos en qué medio de transporte llega a su destino Tomás.
=============================================*/
let e ={

	uno : 'avion',
	dos : 'coche',
	tres : 'otro',

	avion : 1,
	coche : 2,
	otro : 3,

	alejandro: {transporte:0},
	benito   : {transporte:0},
	andres   : {transporte:0},
	carlos   : {transporte:0},
	dario    : {transporte:0},
	tomas    : {transporte:0},

	resultado : function() {
		if(
			e.alejandro.transporte != e.coche &&
			e.alejandro.transporte == e.benito.transporte &&
			e.benito.transporte != e.avion &&

			e.andres.transporte == e.avion &&

			e.carlos.transporte != e.dario.transporte &&
			e.carlos.transporte != e.avion &&
			e.carlos.transporte == e.coche &&

			e.andres.transporte == e.dario.transporte&&
			e.carlos.transporte == e.tomas.transporte
		){
			return true;
		}
		return false
	},
	intervalo : setInterval(() => {

		e.alejandro.transporte = Math.ceil(Math.random()*3);
		e.benito.transporte = Math.ceil(Math.random()*3);
		e.andres.transporte = Math.ceil(Math.random()*3);
		e.carlos.transporte = Math.ceil(Math.random()*3);
		e.dario.transporte = Math.ceil(Math.random()*3);
		e.tomas.transporte = Math.ceil(Math.random()*3);

		if(e.resultado()){
			clearInterval(e.intervalo);
			if(e.tomas.transporte ==1){
				console.log(`Tomas llega a su destino en ${e.uno}`)
			}else if(e.tomas.transporte ==2){
				console.log(`Tomas llega a su destino en ${e.dos}`)
			}else{
				console.log(`Tomas llega a su destino en ${e.otro}`)
			}
		}
	}, 1)
}

/*=============================================
CASO 5. SILENCIO. 

Si Ángela habla más bajo que Rosa y Celia habla más alto que Rosa, ¿habla Ángela más alto o más bajo que Celia?
=============================================*/
let f = {
	angela: 0,
	rosa  : 0,
	celia : 0,

	resultado : function () {
		if(
			f.angela < f.rosa &&
			f.celia > f.rosa
		){
			return true;
		}
		return false;
	},
	intervalo : setInterval(() => {
		f.angela = Math.ceil(Math.random()*3);
		f.rosa   = Math.ceil(Math.random()*3);
		f.celia  = Math.ceil(Math.random()*3);

		if(f.resultado()){
			clearInterval(f.intervalo);
			if(f.angela < f.celia){
				console.log(`Angela habla mas bajo que celia`)
			}else if(f.angela > f.celia){
				console.log(`Angela habla mas fuerte que celia`)
			}else{
				console.log(`Angela habla en el mismo tono de rosa `)
			}
		}
	}, 1)
}
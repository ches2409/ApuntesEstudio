const os = require ('os');
const fs = require ('fs');
const math = require('./matematicas.js');
const color = require('colors');

console.log(math);

console.log(math.divide(20,3));
console.log(math.substract(10, 6));

console.log('Operative System: ', os.platform());
console.log(os.release());
console.log('Free memomry: ', os.freemem());
console.log('Total memory: ', os.totalmem());

// file System - trabajo con archivos del sistema operativo

fs.writeFile('./texto.txt', 'linea uno', function (error){
    if (error){
        console.log(error);
    }
    console.log('Archivo creado'.bgBlue);
});

console.log('ultima linea de codigo'.red);

fs.readFile('./texto.txt', function(err, data){
    if(err){
      console.log(err);  
    }
    console.log(data.toString());
})


// http - peticiones al servidor 

const http = require('http');

const handleServer = function(req, res){
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Apuntes de node.js</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log ('server on port 3000'.green);
});
const http = require ('http');
const readline = require('readline');

let name = "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const server = http.createServer((req,res) => {
    console.log('Serveur démarré');
    res.end(`Bonjour ${name}`);
})

function salutation(name) {
    console.log('Bonjour ' + name);
    server.listen('3000');
  }
  
  function processUserInput(callback) {
    rl.question('Votre prenom est requis pour accéder au serveur, votre prenom : ? ', (answer) => {
      // TODO: Log the answer in a database
      name = answer
      callback(name);
      rl.close();
    });
    
  }

  processUserInput(salutation); 
  

  

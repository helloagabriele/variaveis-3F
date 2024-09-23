const prompt = require('prompt-sync');
const entrada = prompt();






//agencia de viagens  hawaii paris nova york rio de janeiro toquio 
const listaDeDestinos= new Array(
  " Hawaii",
  " paris",
  " nova york",
  " rio de janeiro",
"tóquio"
);
var nomeComprador = entrada("Digite seu nome: ");
var idadeComprador= entrada("qual sua idade?");
console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel vivida");
listaDeDestinos.push(" fraiburgo")
listaDeDestinos.push("são paulo")
listaDeDestinos.push("londres")
console.log(listaDeDestinos);


if(idadeComprador >=18) {
 console.log ("olá senhor (a) " + nomeComprador);
  console.log("comprador maior de idade");
 console.log("Escolha teu destino");

  var contador= 0;
  while(contador <9 ){
  console.log(listaDeDestinos[contador] );
    contador++;
    
  }
  var destino = entrada("digite o numero que corresponde ao seu destino selecionado(0-8): ");
  console.log(`destino selecionados foi: ${listaDeDestinos[destino]})`);
}else{
  console.log("não foi possivel concluir  compra");
console.log("voce é menor de idade");
}


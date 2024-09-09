let idade=18;
const anoNascimento= 2006;
let anoAtual=2024;
const nomeCompleto="helloa";
console.log(" meu nome é " + nomeCompleto + " nascido no ano de " + anoNascimento + " e no ano atual " + anoAtual+ " completo "+ idade + " anos  ");

anoAtual=anoAtual+1;
console.log(anoAtual);

idade = idade +1;
console.log(idade);



//agencia de viagens  hawaii paris nova york rio de janeiro toquio 
const listaDeDestinos= new Array(
  " Hawaii",
  " paris",
  " nova york",
  " rio de janeiro",
"tóquio"
);

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel vivida");
listaDeDestinos.push(" fraiburgo")
listaDeDestinos.push("são paulo")
listaDeDestinos.push("londres")
console.log(listaDeDestinos);

const idadeComprador= 15;

if(idadeComprador >=18) {
  console.log("comprador maior de idade");
console.log("destino disponiveis: "+ listaDeDestinos);
}else{
  console.log("não foi possivel concluir  compra");
console.log("voce é menor de idade");
}


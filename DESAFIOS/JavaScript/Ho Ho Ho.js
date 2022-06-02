// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let lines = gets().split("\n");

//TODO: Complete os espaços em branco com uma possível solução para o desafio

let N = parseInt(lines.shift());
frase=""
for(let i=0;i<N;i++){
  if(i+1!=N){
    frase+="Ho "
  }else{
    frase+="Ho!"
  }
}
console.log(frase)
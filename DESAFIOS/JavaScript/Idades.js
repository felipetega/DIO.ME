// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let count = 0;
let n = 0;
let soma = 0;

//TODO: Complete os espaços em branco com uma possível solução para o desafio

do {
  n = parseInt(gets())
  if(n>0){
    count+=1
    soma+=n}
}while (n > 0);

media=soma/count
print(media.toFixed(2));
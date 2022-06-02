// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let num = parseInt(gets())
let array = []
//TODO: Complete os espaços em branco com uma possível solução para o desafio

for (let i = 0; i < num; i++) {
  let C = String(gets())
  array.push(C)
  T=array[i].length/100
  print(T.toFixed(2))
}
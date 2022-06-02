// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let N = parseInt(gets());

//TODO: Complete os espaços em branco com uma possível solução para o problema

let fib = ((((Math.sqrt(5)+1)/2)**N)-(((Math.sqrt(5)-1)/2)**N))/Math.sqrt(5)
print(fib.toFixed(1));
function verificador(a, b){
  if (a==b){
    console.log("Os números 1 e 2 são iguais")
  }else if (a!=b){
    console.log("Os números 1 e 2 não são iguais")
  }
  if (a+b>=10 && a+b>20){
    console.log(`Sua soma é ${a+b}, que é maior que 10 e 20`)
  }else if (a+b>10 && a+b<20){
    console.log(`Sua soma é ${a+b}, que é maior que 10 e menor que 20`)
  }else if (a+b<10){
    console.log(`Sua soma é ${a+b}, que é menor que 10 e 20`)
  }else if (a+b==10){
    console.log(`Sua soma é ${a+b}, que é menor que 20`)
  }else if (a+b>=10 && a+b>=20){
    console.log(`Sua soma é ${a+b}, que é maior que 10`)
  }
}
verificador(10,10)

let pessoa1 = {}

pessoa1.nome = "Felipe"
pessoa1.idade = "20"
console.log(pessoa1)
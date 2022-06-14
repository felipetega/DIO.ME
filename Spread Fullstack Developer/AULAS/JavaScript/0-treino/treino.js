const PESSOAS = [
  {nome:"Felipe",
  idade:20,
  endereco: "Rua São João",
  genero: "M"
  },
  {nome:"Caio",
  idade:15,
  endereco: "Rua São João",
  genero: "M"
  },
  {nome:"Julia",
  idade:13,
  endereco: "Rua São Cristovão",
  genero: "F"
  },
  {nome:"Gustavo",
  idade:42,
  endereco: "Rua São Tomas",
  genero: "M"
  },
  {nome:"Priscila",
  idade:29,
  endereco: "Rua São Tomas",
  genero: "F"
  }
]
//mostre quem mora na Rua São João
//mostre quem tem menos de 18 anos
//quantos homens e mulheres

function moradoresSaoJoaoo(grupo){
  moradoresSaoJoaoo=[]
  for(let i=0;i<grupo.length;i++){
    let {nome,endereco}=grupo[i]
    if(endereco=="Rua São João"){
      moradoresSaoJoaoo.push(nome)
    }
  }
  console.log(`Os moradores da Rua São João são: ${moradoresSaoJoaoo}!`)
}
moradoresSaoJoaoo(PESSOAS)

//this: call, apply, bind

function getIndividual(lista){
  for(let i =0;i<lista.length;i++){
    let {nome,idade,endereco}=lista[i]
    console.log(`${nome}, ${idade} anos, mora em:  ${endereco}`)
  }
}
getIndividual(PESSOAS)

//process.stdout.write

//arrow function

const arrowFunction = ()=> {console.log("===> ===> ===>")}
arrowFunction()
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

function separaGenero(PESSOAS){
  homens=[]
  mulheres=[]
  for(let i=0;i<PESSOAS.length;i++){
    let {nome,genero}=PESSOAS[i]
    if(genero=="M"){
      homens.push(nome)
    }else if(genero=="F"){
      mulheres.push(nome)
    }
  }
  console.log(`HOMENS: ${homens.length}, MULHERES: ${mulheres.length}`)
}
separaGenero(PESSOAS)

function menorDeIdade(PESSOAS){
  var menoresDeIdade=[]
  for(let i=0;i<PESSOAS.length;i++){
    let {nome,idade}=PESSOAS[i]
    if(idade<=18){
      menoresDeIdade.push(nome)
    }
  }
  console.log(`Os menores de idade são: ${menoresDeIdade}`)
}

menorDeIdade(PESSOAS)

function mesmaRua(PESSOAS){
  moradoresSãoJoão=[]
  for(let i = 0;i<PESSOAS.length;i++){
    let {nome, endereco}=PESSOAS[i]
    if(endereco=="Rua São João"){
      moradoresSãoJoão.push(nome)
    }
  }
  console.log(`Os moradores da São João são: ${moradoresSãoJoão}`)
}

mesmaRua(PESSOAS)
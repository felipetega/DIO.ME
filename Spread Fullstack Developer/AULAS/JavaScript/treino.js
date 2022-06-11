const felipetega ={
  id:20,
  fullName:{
    firstName:"Felipe",
    middleName:"Crema",
    lastName:"Ribeiro"
  }
}
function nomeIdade({fullName:{firstName:first},id:idade}){
  console.log(`A idade de ${first} é ${idade} anos`)
}
nomeIdade(felipetega)

const GRUPO1 = [
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
//quantos homens e mulheres
//mostre quem mora na Rua São João
//mostre quem tem menos de 18 anos


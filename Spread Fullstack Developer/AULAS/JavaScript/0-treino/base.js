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

function separaGenero(grupo){
  homens=[]
  mulheres=[]
  for(let i=0;i<grupo.length;i++){
    let {nome, genero}=grupo[i]
    if(genero=="M"){
      homens.push(nome)
    }else{
      mulheres.push(nome)
    }
  }
  console.log(`Os homens são: ${homens}; e as mulheres são: ${mulheres}!`)
}
separaGenero(GRUPO1)

function moradoresSaoJoao(grupo){
  moradoresSaoJoao=[]
  for(let i =0;i<grupo.length;i++){
    let {nome,endereco}=grupo[i]
    if(endereco=="Rua São João"){
      moradoresSaoJoao.push(nome)
    }
  }
  console.log(`Os moradores da Rua São João são: ${moradoresSaoJoao}!`)
}
moradoresSaoJoao(GRUPO1)

function menoresDeIdade(grupo){
  menoresDeIdade=[]
  for(let i=0;i<grupo.length;i++){
    let {nome,idade}= grupo[i]
    if (idade<18){
      menoresDeIdade.push(nome)
    }
  }
  console.log(`Os menores de idade são: ${menoresDeIdade}!`)
}
menoresDeIdade(GRUPO1)

//FORMATAÇÃO JS

function getName(grupo){
  process.stdout.write("Os integrantes do grupo são: ")
  for(let i=0;i<grupo.length;i++){
    let {nome}=grupo[i]
    process.stdout.write(`${nome}, `);
    if(i==grupo.length-1){
      process.stdout.write(`${nome}! `)
    }
  }
}
getName(GRUPO1)
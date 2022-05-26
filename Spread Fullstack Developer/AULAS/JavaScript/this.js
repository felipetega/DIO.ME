const PESSOA = {
  nome:"Felipe",
  idade:20
}
const PET = {
  nome:"Luna",
  idade:5
}
function getNome(){
  console.log(this.nome)
}
function getIdade(){
  console.log(this.idade)
}
getNome.call(PET)
getIdade.call(PET)

//this: call, apply, bind
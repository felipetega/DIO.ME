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
function getIdade({idade:id}){
  console.log(id)
}
getNome.call(PET) //com o this
getIdade(PET)    //sem o this

//this: call, apply, bind
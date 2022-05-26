function argumentos(){
  console.log(arguments)
}
argumentos(1,4,[3,4,5],"string")

function retornaMaximo(){
  let max=0
  for(let i=0;i<arguments.length;i++){
    if(arguments[i]>max){
      max=arguments[i]
    }
  }
  console.log(max)
}
retornaMaximo(1,3,5,100,20,25)

function tamanhoArray(...args){
  console.log(args.length)
}
tamanhoArray(1,3,56,7,8,10)

const USER = {
  id:20,
  fullName : {
    firstName:"Felipe",
    middleName:"Crema",
    lastName:"Ribeiro"}
}
function userId({id}){
  console.log(`${id}`)
}
function getFullName({fullName: {firstName: first, middleName: middle, lastName: last}}){
  console.log(`${first} ${middle} ${last}`)
}
userId(USER)
getFullName(USER)

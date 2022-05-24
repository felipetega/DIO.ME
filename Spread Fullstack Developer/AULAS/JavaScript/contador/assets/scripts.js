var numeroHTML = document.getElementById("currentNumber")
var numeroAtual = 0

function increment(){
  if (numeroAtual<=9){
    numeroAtual+=1
    numeroHTML.innerHTML=numeroAtual
  }else{
    numeroHTML.innerHTML=numeroAtual
  }
}
function decrement(){
  if (numeroAtual>=-9){
    numeroAtual-=1
    numeroHTML.innerHTML=numeroAtual
  }else{
    numeroHTML.innerHTML=numeroAtual
  }
}
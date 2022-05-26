function verificaPalindromo(nome){
  palindromo=[]
  var c=nome.length
  while(c>=0){
    palindromo.push(nome[c])
    c-=1
  }
  if (palindromo.join("")==nome){
    console.log(`"${nome}" é palíndromo`)
  }else if (palindromo.join("")!=nome){
    console.log(`"${nome}" não é palíndromo`)
  }
}
verificaPalindromo("arara")
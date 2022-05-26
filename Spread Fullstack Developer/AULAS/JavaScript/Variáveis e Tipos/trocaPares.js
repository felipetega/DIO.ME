function trocaPares(array){
  c=0
  while (c<array.length){
  if(array[c]%2==0 && array[c]!=0){
    array[c]=0
  }
    c+=1
  }
  console.log(array)
}

lista=[2,3,5,8,14,17,21,22]
trocaPares(lista)
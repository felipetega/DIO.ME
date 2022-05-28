interface Cachorro{
  nome: string
  idade: number
  parqueFavorito?: string
}

type cachorroSomenteLeitura = {
  readonly [K in keyof Cachorro]-?: Cachorro[K]
}
class meuCachorro implements cachorroSomenteLeitura{
  nome
  idade
  parqueFavorito: string
  
  constructor(nome,idade){
    this.nome = nome
    this.idade = idade
  }
}
const cao = new meuCachorro("Apolo",14)
cao.idade=8

console.log(cao)
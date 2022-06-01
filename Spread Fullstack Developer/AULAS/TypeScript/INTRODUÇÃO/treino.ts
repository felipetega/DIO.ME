interface Restaurantes{
  comida: "lanche" | "pizza" | "esfirra"
}
interface Lanchonete extends Restaurantes{
  cardápio: "x-salada" | "x-tudo"
  molhoEspecial: boolean
  suquinho?:string
  entrega: boolean
}
interface Pizzaria extends Restaurantes{
  cardápio: "marguerita" | "baiana"
  pedaços: number
  bordaRecheada: boolean
  entrega: boolean
}
interface Habibs extends Restaurantes{
  cardápio: "esfirra" | "quibe"
  recheio: "queijo" | "coalhada"
  unidades: number
  entrega: boolean
}
const pedido1:Restaurantes = {
  comida: "lanche",
  //cardápio: "x-tudo",  COMO FAZ ISSO
}
interface IAnimal{
  nome: string,
  tipo: "terrestre" | "aquático" | "voador",
  domestico: boolean
}

interface IFelino extends IAnimal{
  visaoNoturna: boolean
}

interface ICanino extends IAnimal{
  porte: "pequeno" | "medio" | "grande"
}

type IDomestico = IFelino | ICanino

const cachorro: IAnimal = {
  nome:"cachorro",
  tipo:"terrestre",
  domestico:true
}
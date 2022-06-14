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
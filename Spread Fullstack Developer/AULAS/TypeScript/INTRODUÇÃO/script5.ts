interface IUsuario{
  id: string
  email:string
  cargo?:"gerente" | "coordenador" | "supervisor"
}

function redireciona(usuario: IUsuario){
  if (usuario.cargo){
    //redireciona para admin
  }else{
    //redireciona para usuário
  }
}
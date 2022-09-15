var jogador = 'X'

function mudaJogador() {
  if (jogador === 'X') {
    jogador = 'O'
  } else {
    jogador = 'X'
  }
}

function verificaVencedor() {
  quadrado1 = document.getElementById('velha1')
  quadrado2 = document.getElementById('velha2')
  quadrado3 = document.getElementById('velha3')
  quadrado4 = document.getElementById('velha4')
  quadrado5 = document.getElementById('velha5')
  quadrado6 = document.getElementById('velha6')
  quadrado7 = document.getElementById('velha7')
  quadrado8 = document.getElementById('velha8')
  quadrado9 = document.getElementById('velha9')

  if (
    quadrado1.innerHTML === quadrado2.innerHTML &&
    quadrado1.innerHTML === quadrado3.innerHTML &&
    quadrado2.innerHTML === quadrado3.innerHTML
  ) {
    var vencedor = jogador
    var divVencedor = document.getElementById('vencedor')
    divVencedor.innerText = `O vencedor é ${vencedor}`
  }
}

function jogada(id) {
  var quadrado = document.getElementById(id)
  if (quadrado.innerHTML !== '-') {
    return
  }

  quadrado.innerHTML = jogador
  quadrado.style.color = 'black'

  verificaVencedor()
  mudaJogador()
}

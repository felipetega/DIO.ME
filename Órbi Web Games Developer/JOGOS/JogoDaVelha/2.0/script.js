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
    quadrado1.innerHTML == quadrado2.innerHTML &&
    quadrado2.innerHTML == quadrado3.innerHTML &&
    quadrado1.innerHTML != '-'
  ) {
    mudaCorQuadrado(quadrado1, quadrado2, quadrado3)
  } else if (
    quadrado4.innerHTML == quadrado5.innerHTML &&
    quadrado5.innerHTML == quadrado6.innerHTML &&
    quadrado4.innerHTML != '-'
  ) {
    mudaCorQuadrado(quadrado4, quadrado5, quadrado6)
  } else if (
    quadrado7.innerHTML == quadrado8.innerHTML &&
    quadrado8.innerHTML == quadrado9.innerHTML &&
    quadrado7.innerHTML != '-'
  ) {
    mudaCorQuadrado(quadrado7, quadrado8, quadrado9)
  } else if (
    quadrado1.innerHTML == quadrado4.innerHTML &&
    quadrado4.innerHTML == quadrado7.innerHTML &&
    quadrado1.innerHTML != '-'
  ) {
    mudaCorQuadrado(quadrado1, quadrado4, quadrado7)
  } else if (
    quadrado2.innerHTML == quadrado5.innerHTML &&
    quadrado5.innerHTML == quadrado8.innerHTML &&
    quadrado2.innerHTML != '-'
  ) {
    mudaCorQuadrado(quadrado2, quadrado5, quadrado8)
  } else if (
    quadrado3.innerHTML == quadrado6.innerHTML &&
    quadrado6.innerHTML == quadrado9.innerHTML &&
    quadrado3.innerHTML != '-'
  ) {
    mudaCorQuadrado(quadrado3, quadrado6, quadrado9)
  } else if (
    quadrado1.innerHTML == quadrado5.innerHTML &&
    quadrado5.innerHTML == quadrado9.innerHTML &&
    quadrado1.innerHTML != '-'
  ) {
    mudaCorQuadrado(quadrado1, quadrado5, quadrado9)
  } else if (
    quadrado7.innerHTML == quadrado5.innerHTML &&
    quadrado5.innerHTML == quadrado3.innerHTML &&
    quadrado3.innerHTML != '-'
  ) {
    mudaCorQuadrado(quadrado3, quadrado5, quadrado7)
  }
}

function mudaCorQuadrado(q1, q2, q3) {
  q1.style.background = 'green'
  q2.style.background = 'green'
  q3.style.background = 'green'

  var vencedor = jogador
  var x = document.getElementById('X')
  var o = document.getElementById('O')
  console.log(x)
  if (vencedor == 'X') {
    x.innerHTML += 1
  } else {
    o.innerHTML += 1
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

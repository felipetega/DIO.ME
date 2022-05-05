let order = [];
let clickedOrder = [];
let score = 0;
/*
0-verde
1-vermelho
2-amarelo
3-azul
*/
const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

//cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createrColorElement(order[i])
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add("selected");
    }, number - 250);
    setTimeout(() => {
        element.classList.remove("selected");
    });
}

//checa se os botoes clicados são os mesmos da ordem gerada
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando o próximo nível!`);
        nextLevel();
    }
}

//função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createrColorElement(color).classList.add("selected");

    setTimeout(() => {
        createrColorElement(color).classList.remove("selected");
        checkOrder();
    },250);
}

//função que retorna a cor
let createrColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color ==1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//funçãp ára próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função para game over
let gameOver = () => {
    alert(`Ponuação: ${score}!\nVocê perdeu!\nClique em OK para reiniciar`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () =>{
    alert("Bem vindo ao Genius! Iniciando novo jogo!")
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio do jogo
playGame();
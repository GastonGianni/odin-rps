let computerSelection = '';
let playerSelection = "";

let piedra = document.querySelector(".container-piedra");
let papel = document.querySelector(".container-papel");
let tijeras = document.querySelector(".container-tijeras");

const btnStart = document.querySelector('.btn-header')
const main = document.querySelector('main')
const btnRestart = document.querySelector('.btn-footer')

const winLose = document.querySelector('.win-lose')
const resultado = document.querySelector('.resultado')

btnRestart.addEventListener('click', () => location.reload())

btnStart.addEventListener('click', startGame)

piedra.addEventListener("click", () => {
  playerSelection = piedra.dataset.choiseType;
  computerSelection = computerPlay()  
  winLose.textContent=(playRound(playerSelection, computerSelection));
  resultado.textContent=`Elegiste ${playerSelection} y tu oponente eligió ${computerSelection}`;
  main.style.display= 'none'
  btnRestart.style.display = 'block'
});
papel.addEventListener("click", () => {
  playerSelection = papel.dataset.choiseType;
  computerSelection = computerPlay()  
  winLose.textContent=(playRoundDos(playerSelection, computerSelection));
  resultado.textContent=`Elegiste ${playerSelection} y tu oponente eligió ${computerSelection}`;
  main.style.display= 'none'
  btnRestart.style.display = 'block'
});
tijeras.addEventListener("click", () => {
  playerSelection = tijeras.dataset.choiseType;
  computerSelection = computerPlay()  
  winLose.textContent=(playRoundTres(playerSelection, computerSelection));
  resultado.textContent=`Elegiste ${playerSelection} y tu oponente eligió ${computerSelection}`;
  main.style.display= 'none'
  btnRestart.style.display = 'block'
});

function startGame(){
    btnStart.style.display= 'none'
    main.style.display= 'flex'
}

function computerPlay() {
  choise = Math.floor(Math.random() * 3) + 1;
  switch (choise) {
    case 1:
      return (choise = "Piedra");
    case 2:
      return (choise = "Papel");
    default:
      return (choise = "Tijeras");
  }
}

function playRound(playerSelection, computerSelection) {
  if ((playerSelection = "Piedra" && computerSelection == "Piedra")) {
    return "EMPATE!";
  } else if ((playerSelection = "Piedra" && computerSelection == "Papel")) {
    return "PERDISTE";
  } else if ((playerSelection = "Piedra" && computerSelection == "Tijeras")) {
    return "GANASTE!";
  }}

function playRoundDos(playerSelection,computerSelection){
    if (playerSelection = 'Papel' && computerSelection == 'Piedra'){
        return 'GANASTE!'
    } else if (playerSelection = 'Papel' && computerSelection == 'Papel'){
        return 'EMPATE!'
    }else if (playerSelection = 'Papel' && computerSelection == 'Tijeras'){
      return 'PERDISTE!'
    }
}

function playRoundTres(playerSelection, computerSelection){
    if (playerSelection = 'Tijeras' && computerSelection == 'Piedra'){
        return 'PERDISTE!'
    } else if (playerSelection = 'Tijeras' && computerSelection == 'Papel'){
        return 'GANASTE!'
    }else if (playerSelection = 'Tijeras' && computerSelection == 'Tijeras'){
      return 'EMPATE'
    }
}
  




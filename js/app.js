let btn = document.querySelector('.btn-header');
let main = document.querySelector('.main');
let piedra = document.querySelector('.container-piedra');
let papel = document.querySelector('.container-papel');
let tijeras = document.querySelector('.container-tijeras');
let winLose = document.querySelector('.win-lose')
let vidas = 5

btn.addEventListener('click', startGame);
piedra.addEventListener('click', choisePiedra,);
papel.addEventListener('click', choisePapel,);
tijeras.addEventListener('click', choiseTijeras,);


function startGame() {
    btn = document.querySelector('.btn-header').style = 'display: none';
    main = document.querySelector('.main').style = 'display:flex'
}

function choisePiedra(choise) {
    choise = 'Piedra!'
    resultado = document.querySelector('.resultado');
    resultado.textContent = (`Elegiste ${choise}`);
    main = document.querySelector('.main').style = 'display:none'
    computerSelection()
    match()
}

function choisePapel(choise) {
    choise = 'Papel!'
    resultado = document.querySelector('.resultado');
    resultado.textContent = ('Elegiste Papel!')
    main = document.querySelector('.main').style = 'display:none'
    computerSelection()
    match()
}

function choiseTijeras(choise) {
    choise = 'Tijeras!'
    resultado = document.querySelector('.resultado');
    resultado.textContent = ('Elegiste Tijeras!')
    main = document.querySelector('.main').style = 'display:none';
    computerSelection()
    match()
}

const playerOptions = [piedra, papel, tijeras];

function computerSelection(result) {
    let resultadoOponente = document.querySelector('.resultado-oponente');
    result = Math.floor(Math.random() * 3) + 1;
    switch (result) {
        case 1: return result= 'Piedra', resultadoOponente.textContent=(`Tu oponente eligío ${result}`)
        case 2: return result= 'Tijeras', resultadoOponente.textContent=(`Tu oponente eligío ${result}`)
        default: return result= 'Papel', resultadoOponente.textContent=(`Tu oponente eligío ${result}`)
     } 
    
}

function match(){
    if (computerSelection == 1 && choisePiedra.choise == 'Piedra!'){
       return winLose.textContent = ('EMPATE')
    } else if (computerSelection == 1 && choisePapel.choise == 'Papel!'){
       return winLose.textContent = ('GANASTE!')
    } else if (computerSelection == 1 && choiseTijeras.choise == 'Tijeras!') 
    return winLose.textContent = ('PERDISTE :(');
}






        














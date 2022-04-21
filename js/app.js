let btn = document.querySelector('.btn-header');
let main = document.querySelector('.main');
let piedra = document.querySelector('.container-piedra');
let papel = document.querySelector('.container-papel');
let tijeras = document.querySelector('.container-tijeras');
let vidas = 5


btn.addEventListener('click', startGame);
piedra.addEventListener('click', choisePiedra,);
papel.addEventListener('click', choisePapel,);
tijeras.addEventListener('click', choiseTijeras,);


function startGame() {
    btn = document.querySelector('.btn-header').style = 'display: none';
    main = document.querySelector('.main').style = 'display:flex'
}

function choisePiedra() {
    resultado = document.querySelector('.resultado');
    resultado.textContent = (`Elegiste Piedra`);
    main = document.querySelector('.main').style = 'display:none'
    computerSelection()
}

function choisePapel() {
    resultado = document.querySelector('.resultado');
    resultado.textContent = ('Elegiste Papel!')
    main = document.querySelector('.main').style = 'display:none'
    computerSelection()
}

function choiseTijeras() {
    resultado = document.querySelector('.resultado');
    resultado.textContent = ('Elegiste Tijeras!')
    main = document.querySelector('.main').style = 'display:none';
    computerSelection()
}

const playerOptions = [piedra, papel, tijeras];

function computerSelection(result) {
    let resultadoOponente = document.querySelector('.resultado-oponente');
    result = Math.floor(Math.random() * 3) + 1;
    switch (result) {
        case 1: return result= 'piedra', resultadoOponente.textContent=(`Tu oponente eligío ${result}`)
        case 2: return result= 'Tijeras', resultadoOponente.textContent=(`Tu oponente eligío ${result}`)
        default: return result= 'Papel', resultadoOponente.textContent=(`Tu oponente eligío ${result}`)
     } 
    
}






        














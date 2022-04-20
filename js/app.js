let btn = document.querySelector('.btn-header');
let main = document.querySelector('.main');
let piedra = document.querySelector('.piedra');
let papel = document.querySelector('.papel');
let tijeras = document.querySelector('.tijeras');

btn.addEventListener('click', startGame);
piedra.addEventListener('click', choise);
papel.addEventListener('click', choise);
tijeras.addEventListener('click', choise);

function startGame() {
    btn = document.querySelector('.btn-header').style = 'display: none';
    main = document.querySelector('.main').style = 'display:flex'
}

function choise(item){
    
}











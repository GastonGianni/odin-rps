let btn = document.querySelector('.btn-header');
let main = document.querySelector('.main');
let piedra = document.querySelector('.piedra');
let papel = document.querySelector('.papel');
let tijeras = document.querySelector('.tijeras');

const playerOptions = [piedra,papel,tijeras];
const computerOptions = ['Piedra','Papel','Tijeras']

btn.addEventListener('click', startGame);
piedra.addEventListener('click', choisePiedra);
papel.addEventListener('click', choisePapel);
tijeras.addEventListener('click', choiseTijeras);



function startGame() {
    btn = document.querySelector('.btn-header').style = 'display: none';
    main = document.querySelector('.main').style = 'display:flex'
}

function choisePiedra(item){
    resultado = document.querySelector('.resultado');
    piedra.textContent=('Piedra')
    resultado.textContent=(`Elegiste ${piedra.textContent}`);
}
function choisePapel(item){
    resultado = document.querySelector('.resultado');
    resultado.textContent=('Elegiste Papel!')
}
function choiseTijeras(item){
    resultado = document.querySelector('.resultado');
    resultado.textContent=('Elegiste Tijeras!')
}













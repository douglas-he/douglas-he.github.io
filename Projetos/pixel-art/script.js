const escolha = document.getElementById('cor');
const localClicado = document.querySelector ('.colorir');
const tbody= document.getElementsByTagName ('tbody');
const clear= document.getElementById ('clear');
let cor = 'black';
const up = document.getElementById ('up');
const down = document.getElementById ('down');
const contador = document.getElementById ('contador');

contador.innerText = 5;
down.addEventListener('click', function(){
  if ( parseInt(contador.innerText) > 5  ){
    contador.innerText= parseInt(contador.innerText) - 1 ;
    removeLinha();
    removeColuna();
  }
  else{
    alert ('Valor Invalido');
  }
})

up.addEventListener ('click' , function(){
  if ( parseInt(contador.innerText) >= 50  ){
    alert ('Valor Invalido');
  }
  else{
  contador.innerText= parseInt(contador.innerText) + 1 ;
  adicionaLinha();
  DivETd();
}
})
function removeColuna(){
  const pega= document.querySelectorAll('.linhas');

  for(let i=0; i < parseInt(contador.innerText); i++){
  const tira= []
  tira[i] = pega[i].lastChild;
  pega[i].removeChild (tira[i]) ;
  }
}
function removeLinha(){
  const ultimo = tbody[1].lastChild;
  tbody[1].removeChild(ultimo);
}

function adicionaLinha(){
  const criaTr = document.createElement ('tr');
  tbody[1].appendChild (criaTr);
  criaTr.className= ("class", 'linhas');
  criaTdDiv();
}

function criaTdDiv(){
  const criaDiv = [];
  const criaTd = [];
  const pega= document.querySelectorAll('.linhas');
  for(let i= 0; i < parseInt(contador.innerText -1) ; i++){
  criaTd[i]= document.createElement ('td');
  pega[ parseInt(contador.innerText) -1].appendChild (criaTd[i]);
  criaDiv[i]= document.createElement ('div');
  criaTd[i].appendChild(criaDiv[i]);
  criaDiv[i].className= ("class", "quadrado")
  }
}
function DivETd(){
  const criaTd = [];
  const criaDiv = [];
  const trs= document.querySelectorAll ('.linhas')
  for( i = 0 ; i != parseInt(contador.innerText) ; i++) {
    criaTd[i]=document.createElement ('td');
    trs[i].appendChild(criaTd[i]);
    criaDiv[i]= document.createElement ('div');
    criaTd[i].appendChild(criaDiv[i]);
    criaDiv[i].className= ("class", "quadrado")
  }
}
clear.addEventListener('click',function(){
  limpar();
})
localClicado.addEventListener ('mouseup', function () {
  event.target.style.backgroundColor=cor;
});
const selecionaCor = document.querySelector ('.escolhas');

const guardaCor= [];

selecionaCor.addEventListener ('mouseup', function () {
  cor = qualACor();
  escolha.style.backgroundColor= cor;
});
selecionaCor.addEventListener('dblclick', function(){
  event.target.style.backgroundColor='white';
});
window.onload= function(){
  this.trocaCor();
}
function trocaCor(){
  const cores = [];
  cores[0] = document.getElementById('cor1');
  cores[1] = document.getElementById('cor2');
  cores[2] = document.getElementById('cor3');
  cores[3] = document.getElementById('cor4');

  for(let i = 0 ; i <= 2 ; i++ ){
    guardaCor[i]= geraCor();
    cores[i].style.backgroundColor= guardaCor[i];
  }
}

function geraCor(){
  const hexadecimais = '0123456789ABCDEF';
  let cor1 = '#';
  for (let i = 0; i < 3; i++ ) {
      cor1 += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return cor1;
}

function qualACor () {
  switch (event.target.id){
    case 'cor1':
      return guardaCor[0];
    case 'cor2':
      return guardaCor[1];
    case 'cor3':
      return guardaCor[2];
    case 'cor4':
      return 'black';
    default:
      return 'black';
  }
}
function limpar(){
  const array = document.querySelectorAll ('.quadrado');
  for( let i = 0; array[i] != undefined ; i++) {
    array[i].style.backgroundColor = '';
  }
}
const but= document.getElementById('random');
but.addEventListener('click', function() {
  const para = setInterval ( function (){
    limpar();
    clearInterval(para);
    random();
  }, 10 );

})

function random(){
  const array = document.querySelectorAll ('.quadrado');

  for( let i = 0 ; i < 24; i+=5){
    if( Math.floor(Math.random() * 10) < 6){
      array[i].style.backgroundColor= cor;
      array[i+4].style.backgroundColor=cor;
    }
    }
    for( let i = 1 ; i < 24; i+=5){
      if( Math.floor(Math.random() * 10) < 6){
        array[i].style.backgroundColor= cor;
        array[i+2].style.backgroundColor=cor;
      }
    }
    for( let i = 2 ; i < 24; i+=5){
      if( Math.floor(Math.random() * 10) < 6){
        array[i].style.backgroundColor= cor;
      }
    }
}


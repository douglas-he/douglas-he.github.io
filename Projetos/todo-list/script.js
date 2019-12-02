const ok = document.getElementById('envia');
const entrada = document.getElementById('entrada');
const pegaOl = document.querySelector('ol');
const botoes = document.querySelectorAll('button');
const apagaTudo = document.getElementById('apagarTudo');
const apagaRealizado = document.getElementById('apagarCompletos');
let apaga = document.querySelectorAll('.risca');


function removeTudo() {
  apagaTudo.addEventListener('click', function () {
    const pegandoOl = document.querySelector('ol');
    pegandoOl.innerHTML = '';
  });
}


function salvar() {
  const botaoSalvar = document.getElementById('salvar');
  botaoSalvar.addEventListener('click', function () {
    localStorage.clear();
    let li = document.querySelectorAll('.item');

    for (let i = 0; i < li.length; i+=1) {
      localStorage.setItem(i, li[i].innerHTML);
    }
  });
}
function recupera(criaLi) {
  let li = localStorage.length;
  for (let j = 0 ; j < li ; j+=1) {
    const criarLi = document.createElement('li');
    let novaString = localStorage.getItem(j);
    criarLi.innerHTML = novaString;
    criarLi.className = 'item';
    pegaOl.appendChild(criarLi);
  }
}
function risca(criaLi) {
  criaLi.addEventListener('dblclick', function () {
    criaLi.classList.toggle('risca');
    apaga = document.querySelectorAll('.risca');
  });
}

function marca(criaLi) {
  criaLi.addEventListener('click', function () {
    const destacado = document.querySelectorAll('.destaca');
    if (destacado[0] === event.target) {
      event.target.classList.toggle('destaca');
    } else if (destacado[0] !== undefined) {
      destacado[0].className = '';
      event.target.classList.toggle('destaca');
    } else {
      criaLi.classList.toggle('destaca');
    }
  });
}

function moveCima() {
  const botaoCima = document.getElementById('moveCima');
  botaoCima.addEventListener('click', function () {
    let movido = document.querySelector('.destaca');
    const itens = movido.previousSibling;
    if (itens.innerHTML === undefined) {
      alert('A primeira posição não sobe, ela ja esta em primeiro !!!');
    } else {
      let auxiliar = itens.innerHTML;
      itens.innerHTML = movido.innerHTML;
      movido.innerHTML = auxiliar;
    }
  });
}

function moveBaixo (){
  const botaoBaixo = document.getElementById('moveBaixo');
  botaoBaixo.addEventListener('mouseup', function () {
    let movido = document.querySelector('.destaca');
    const itens = movido.nextSibling;
    if (itens === null) {
      alert('A ultima posição não Desce!')
    } else {
      let auxiliar = movido.innerHTML;
      movido.innerHTML = itens.innerHTML;
      itens.innerHTML = auxiliar;
    }
  });
}

function removeSelecao (){
  const remover = document.getElementById('remove');
  remover.addEventListener('click', function() {
    let movido = document.querySelector('.destaca');
    pegaOl.removeChild(movido);
  });
}

function adicionaLinha(argumento) {
  if (argumento === '') {
    alert('Você deve adicionar alguma informação!');
  } else {
    const criaLi = document.createElement('li');
    pegaOl.appendChild(criaLi);
    criaLi.innerText = argumento;
    criaLi.classList = ('class', 'item');
    entrada.value = '';
    risca(criaLi);
    marca(criaLi);
  }
}

function click() {
  ok.addEventListener('click', function () {
    adicionaLinha(entrada.value);
  });
}

function trocaMouse() {
  for (let i = 0; i < botoes.length; i += 1) {
    botoes[i].addEventListener('mouseover', function () {
      botoes[i].style.cursor = 'pointer';
      botoes[i].style.backgroundColor = 'cornsilk';
    });
    botoes[i].addEventListener('mouseout', function () {
      botoes[i].style.backgroundColor = 'ButtonFace';
    });
  }
}

function apagaRiscado() {
  apagaRealizado.addEventListener('click', function () {
    for (let i = 0; i < apaga.length; i += 1) {
      pegaOl.removeChild(apaga[i]);
    }
  });
}

window.onload = function inicia() {
  click();
  trocaMouse();
  removeTudo();
  apagaRiscado();
  moveCima();
  moveBaixo();
  removeSelecao();
  salvar();
  recupera();
};

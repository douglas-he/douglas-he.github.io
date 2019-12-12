window.onload = function() {
    let botao = document.getElementById('diretorio');
    let texto = document.getElementById("entrada");
    let escreve = document.getElementById("texto");
    let texto2 = document.getElementById("entrada2")
    let escreve2 = document.getElementById("texto1");
    let up = document.getElementById('up');
    let down = document.getElementById('down');
    escreve.style.fontSize = '30px';
    escreve2.style.fontSize = '30px';

    function criaImagem() {
        let image = document.getElementById('pegarTag');
        image.src = URL.createObjectURL(event.target.files[0]);
        image.alt = "gerador de memes";
        image.style.width = "900px";
        image.style.height = "500px";
    }

    botao.addEventListener('change', function() {
        criaImagem();
    });


    texto.addEventListener('input', function() {
        if (texto.value.length > 100) {
            alert('É um meme e não a biblia');
        } else {
            escreve.innerHTML = texto.value;
        }
    })

    texto2.addEventListener('input', function() {
        if (texto2.value.length >= 90) {
            alert('É um meme e não a biblia');
        } else {
            escreve2.innerHTML = texto2.value;
        }
    })

    up.addEventListener('click', function() {

        if (parseInt(escreve.style.fontSize) >= 40) {
            alert('Pra que isso tudo de fonte');
        } else {
            escreve.style.fontSize = (parseInt(escreve.style.fontSize) + 5 + 'px');
            escreve2.style.fontSize = (parseInt(escreve2.style.fontSize) + 5 + 'px');
            if( escreve2.innerHTML != '') escreve.style.marginTop='200px '
        }
    });
    down.addEventListener('click', function() {
        if (parseInt(escreve.style.fontSize) <= 20) {
            alert('Ai não vai dar nem pra ler');
        } else {
            escreve.style.fontSize = (parseInt(escreve.style.fontSize) - 5 + 'px');
            escreve2.style.fontSize = (parseInt(escreve2.style.fontSize) - 5 + 'px');
        }
    })
    let mem1 = document.getElementById('mem1');
    mem1.addEventListener('click', function() {
        let x = 'meme1'
        sugestion(mem1, x)
        image.alt = 'Garoto Rico Branco'
    })
    let mem2 = document.getElementById('mem2');
    mem2.addEventListener('click', function() {
        let x = 'meme2'
        sugestion(mem2, x)
    })
    let mem3 = document.getElementById('mem3');
    mem3.addEventListener('click', function() {
        let x = 'meme3'
        sugestion(mem3, x)

    })

    function sugestion(mem1, x) {
        let image = document.getElementById('pegarTag');
        let meme = document.getElementById(x);
        image.src = meme.src;
        image.alt = "gerador de memes";
        image.style.width = "900px";
        image.style.height = "500px";
    }
    let arrayBordas = document.getElementsByClassName('local');
    arrayBordas[0].addEventListener('click', function() {
        let box = document.getElementsByClassName('box');
        box[0].style.border = "double blue 5px";
    })
    arrayBordas[1].addEventListener('click', function() {
        let box = document.getElementsByClassName('box');
        box[0].style.border = 'blueviolet dashed 5px';
    })
    arrayBordas[2].addEventListener('click', function() {
        let box = document.getElementsByClassName('box');
        box[0].style.border = 'inset chocolate 5px';
    })
    let bordaPadrao = document.getElementsByClassName('border4');
    bordaPadrao[0].addEventListener('click', function() {
        let box = document.getElementsByClassName('box');
        box[0].style.border = 'solid 5px black';
    })
    let cor = document.getElementById('cores');

    cor.addEventListener('click', function() {
        switch (cor.selectedIndex) {
            case 1:
                escreve.style.color = 'white';
                escreve2.style.color = 'white';
                voltaSombra();
                break;
            case 2:
                escreve.style.color = 'black';
                escreve2.style.color = 'black';
                escreve.style.textShadow = '3px 3px white';
                escreve2.style.textShadow = '3px 3px white';
                break;
            case 3:
                escreve.style.color = 'yellow';
                escreve2.style.color = 'yellow';
                voltaSombra();
                break;
            case 4:
                escreve.style.color = 'red';
                escreve2.style.color = 'red';
                voltaSombra();
                break;
            case 5:
                escreve.style.color = 'green';
                escreve2.style.color = 'green';
                voltaSombra();
                break;
            case 6:
                escreve.style.color = 'blue';
                escreve2.style.color = 'blue';
                voltaSombra();
                break;
        }
    })

    function voltaSombra() {
        escreve.style.textShadow = '3px 3px black';
        escreve2.style.textShadow = '3px 3px black';
    }
}

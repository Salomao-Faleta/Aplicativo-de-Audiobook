const botaoAnterior = document.querySelector('#anterior');
const botaoPlayPause = document.querySelector('#play-pause');
const botaoProximo = document.querySelector('#proximo');
const audioCapitulo = document.querySelector('#audio-capitulo');
const nomeCapitulo = document.querySelector('#capitulo');

//Variaveis de ambiente
const numeroCapito = 10;
let taTocando = false;
let capituloAtual = 1;


function tocarFaixa(){
    audioCapitulo.play();
    
    //Trocando o icone de play-pause
    botaoPlayPause.classList.remove('bi-play-circle');
    botaoPlayPause.classList.add('bi-pause-circle');
}

function pausarFaixa(){
    audioCapitulo.pause();

    //Trocando o icone de play-pause
    botaoPlayPause.classList.remove('bi-pause-circle');
    botaoPlayPause.classList.add('bi-play-circle');
}

function tocarOuPausar(){
    if(taTocando === false){
        tocarFaixa();
        taTocando = true;
    }else{
        pausarFaixa();
        taTocando = false;
    }
}

//trocar o nome do capítulo
function trocarNome(){
    nomeCapitulo.innerHTML = `Capítulo ${capituloAtual}`
}

//Trocando o capítulo
function proximaFaixa(){
    
    if(capituloAtual == numeroCapito){  
        capituloAtual = 1;
    }else{
        capituloAtual++;
    }
    
    trocarNome();
    
    audioCapitulo.src = `./src/dom-casmurro/${capituloAtual}.mp3`;
    tocarFaixa();
}

//Voltando o capítulo
function voltarFaixa(){
    
    if(capituloAtual === 1){
        capituloAtual = 10;
    }else{
        capituloAtual--;
    }
    
    trocarNome();

    audioCapitulo.src = `./src/dom-casmurro/${capituloAtual}.mp3`;
    tocarFaixa();    
}





botaoProximo.addEventListener('click', proximaFaixa);
botaoAnterior.addEventListener('click', voltarFaixa);
botaoPlayPause.addEventListener('click', tocarOuPausar);
const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAnvancar = document.getElementById('avancar');
const setaVoltar = document.getElementById('voltar');
let imagemAtual = 0;
const totalDeImagens = imagensPainel.length -1;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAnvancar.addEventListener('click', function() {
    if (imagemAtual === totalDeImagens) {
        return;
    }

    imagemAtual++;

    esconderImagens();
    mostrarImagem();
    opacidadeSeta()
});

setaVoltar.addEventListener('click', function() {
    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagens()
    mostrarImagem()
    opacidadeSeta()
});

function opacidadeSeta() {
    const primeiroProjeto = 0;
    const ultimoProjeto = imagensPainel.length -1;

    imagemAtual === primeiroProjeto ? setaVoltar.classList.add('opacidade-seta') : setaVoltar.classList.remove('opacidade-seta');

    imagemAtual === ultimoProjeto ? setaAnvancar.classList.add('opacidade-seta') : setaAnvancar.classList.remove('opacidade-seta');
}
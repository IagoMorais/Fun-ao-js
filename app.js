function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo numero secreto');
exibirTextoNaTela('p', 'Escolha um numero de 0 a 10');

function verificarChute() {
    console.log('O botão foi clicado!');
}
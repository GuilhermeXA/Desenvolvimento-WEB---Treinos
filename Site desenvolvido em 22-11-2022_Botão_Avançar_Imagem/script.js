
listaImagens = ['http://127.0.0.1:5500/imagemEmBranco.png','http://127.0.0.1:5500/flamengo.jpg', 'http://127.0.0.1:5500/botafogo.jpg', 'http://127.0.0.1:5500/fluminense.png', 'http://127.0.0.1:5500/vasco.png'];

function avancarImagem() {
    
    let imgAtual = document.getElementById('CaixaImagem');

    if (imgAtual.src == listaImagens[0]) {
        imgAtual.src = listaImagens[1];
    } else if (imgAtual.src == listaImagens[1]) {
        imgAtual.src = listaImagens[2];
    } else if (imgAtual.src == listaImagens[2]) {
        imgAtual.src = listaImagens[3];
    } else if (imgAtual.src == listaImagens[3]) {
        imgAtual.src = listaImagens[4];
    } else {
        imgAtual.src = listaImagens[1];
    }

}

function voltarImagem() {
    
    let imgAtual = document.getElementById('CaixaImagem');

    if (imgAtual.src == listaImagens[4]) {
        imgAtual.src = listaImagens[3];
    } else if (imgAtual.src == listaImagens[3]) {
        imgAtual.src = listaImagens[2];
    } else if (imgAtual.src == listaImagens[2]) {
        imgAtual.src = listaImagens[1];
    } else if (imgAtual.src == listaImagens[1]) {
        imgAtual.src = listaImagens[4];
    } else {
        imgAtual.src = listaImagens[1];
    }

}

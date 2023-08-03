function trocarImagemAvancar() {
    botaoAvancar = document.getElementById('btnAvancar').value;
    botaoVoltar = document.getElementById('btnVoltar').value;
    caixaImagem = document.getElementById('caixaImagem').value;
    listaImagens = ['imagemEmBranco.png','flamengo.jpg', 'botafogo.jpg', 'vasco.png', 'fluminense.png'];

    //document.getElementById('caixaImagem').src = listaImagens[1];
    if (document.getElementById('caixaImagem').src == listaImagens[0]) {
        document.getElementById('caixaImagem').src = listaImagens[1];
    } else {
        document.getElementById('caixaImagem').src = listaImagens[2];
    }

}

function apresentacaoSlide() {
    listaImagens = ['imagemEmBranco.png','flamengo.jpg', 'botafogo.jpg', 'vasco.png', 'fluminense.png'];



    // for (i = 0; i <= 4; i++) {
    //     document.getElementById('caixaImagem').src = listaImagens[i];
    //     setTimeout("apresentacaoSlide()", 1000);
    // }
}

//------------------------------------------------------------------

var listaImagens = ['imagemEmBranco.png','flamengo.jpg', 'botafogo.jpg', 'vasco.png', 'fluminense.png'];

function slide1(){
    document.getElementById('caixaImagem').src=listaImagens[1];
    setTimeout("slide4()", 2000)
}
    
function slide2(){
    document.getElementById('caixaImagem').src=listaImagens[2];
    setTimeout("slide1()", 2000)
}
    
function slide3(){
    document.getElementById('caixaImagem').src=listaImagens[3];
    setTimeout("slide2()", 2000)
}

function slide4(){
    document.getElementById('caixaImagem').src=listaImagens[4];
    setTimeout("slide3()", 2000)
}

//Alterando as imagens
var arrayImg = ['Areal-02.jpg', 'Areal-03.jpg', 'Areal-04.jpg', 'Areal-05.jpg', 'Areal-06.jpg', 'Areal-07.jpg'];
var i = 0

function alterarImagem() {
    if (i == arrayImg.length) {
        i = 0;
    }
    document.getElementById('caixaImagem').src = arrayImg[i];
    i++;
}
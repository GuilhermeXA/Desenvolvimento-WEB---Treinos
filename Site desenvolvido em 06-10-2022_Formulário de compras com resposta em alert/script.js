let nome = document.getElementById('nome').text;
let quantidade = document.getElementById('quantidade');
let preco = document.getElementById('preco');
let resultado = document.getElementById('listaResultado');
let btnResultado = document.getElementById('btnResultado');

//btnResultado.addEventListener('click', preencher);

function preencher() {
    resultado.innerHTML = nome;
}

//var btnIncluir = document.getElementById('btnIncluir').value;
var textArea = document.getElementById('listaProduto').value = "";
var selectMarca = document.getElementById('selectMarca').value;

function preencherTextArea() {
    if (textArea == "") {
        var nome = document.getElementById('inpNome').value;
        var marca = document.getElementById('selectMarca').selectedIndex;
        var optMarca = document.getElementById('selectMarca').options[marca].text;
        var preco = document.getElementById('inpPreco').value;
        var quantidade = document.getElementById('inpQuantidade').value;
        var calculoPrecoTotal = preco * quantidade;
        var calculoPrecoTotal = 'R$' + calculoPrecoTotal + ',00';

        document.getElementById('inpPrecoTotal').value = calculoPrecoTotal;

        document.getElementById('listaProduto').value = nome + "\n" + optMarca + "\n" + preco + "\n" + quantidade + "\n" + calculoPrecoTotal;
    
    } else {
        var nome = document.getElementById('inpNome').value;
        var marca = document.getElementById('selectMarca').selectedIndex;
        var optMarca = document.getElementById('selectMarca').options[marca].text;
        var preco = document.getElementById('inpPreco').value;
        var quantidade = document.getElementById('inpQuantidade').value;
        var calculoPrecoTotal = preco * quantidade;
        var precoTotal = document.getElementById('inpPrecoTotal').value;

        precoTotal.value = calculoPrecoTotal;

        document.getElementById('listaProduto').value = nome + "\n" + optMarca + "\n" + preco + "\n" + quantidade + "\n" + precoTotal;
    } 
    
}

var botao = document.querySelector("#btnIncluir");
function botaoHandler(event){
    event.preventDefault();
    console.log("Botão Clicado!");
}
botao.addEventListener('click',botaoHandler);


var textArea = document.getElementById('listaCompra').value = "";
var caixaDeSelecao = document.getElementById('caixaProdutos').value;

function preencherTextArea() {
    if (textArea == "") {
        var selectProduto = document.getElementById('caixaProdutos').selectedIndex;
        var optProduto = document.getElementById('caixaProdutos').options[selectProduto].text;
    
        opcaoRadio();
        //----------------------------------------------------------------------

        var mesValidade = document.getElementById('mesVal').value;
        var anoValidade = document.getElementById('anoVal').value;
        var numCartao = document.getElementById('numCar').value;
        var selectParcelas = document.getElementById('caixaParcelas').selectedIndex;
        var optParcela = document.getElementById('caixaParcelas').options[selectParcelas].text;
        document.getElementById("listaCompra").value = optProduto + "\n" + bandeiraCartao + "\n" + mesValidade + "/" + anoValidade + "\n" + numCartao + "\n" + optParcela;
        
    } else {
        var selectProduto = document.getElementById('caixaProdutos').selectedIndex;
        var optProduto = document.getElementById('caixaProdutos').options[selectProduto].text;
        var bandeiraCartao = document.getElementById('RadBand').value;
        var mesValidade = document.getElementById('mesVal').value;
        var anoValidade = document.getElementById('anoVal').value;
        var selectParcelas = document.getElementById('caixaParcelas').selectedIndex;
        var optParcela = document.getElementById('caixaParcelas').options[selectParcelas].text;
        document.getElementById("listaCompra").value = optProduto + "\n" + bandeiraCartao + "\n" + mesValidade + "/" + anoValidade + numCartao + "\n" + "\n" + optParcela;
    }
}

var botao = document.querySelector('#btnIncluir');
function botaoIncluir(event) {
    event.preventDefault();
}
botao.addEventListener('click', botaoIncluir);

//------------------------------------
//Descobrindo a opção selecionada no radio
function opcaoRadio() {
    let radband = document.getElementById('RadBand');
    let texto = "";
    let i;

    for (i = 0; i < radband.length; i++) {
        if (radband[i].checked) {
            texto = texto + radband[i].value + "\n";
        }
    }
    console.log(radband.value);
}
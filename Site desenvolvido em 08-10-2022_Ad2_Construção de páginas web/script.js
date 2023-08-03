/*var imgAtual = "Imagens/vazio.jpg";
var imgAnterior = "Imagens/M_Oakley_100.jpg";

function trocar() {
	document.getElementById("figura").src = imgAtual;
	let aux = imgAtual;
	imgAtual = imgAnterior;
	imgeAnterior = aux;
}
*/

//Páginas Lentes
var marcaLente = ["Softlens", "Bioinfinity", "Acuvue Oasys", "Acuvue 2"];
var imgLente = ["BauchELomb_30D_200.jpg", "Bioinfinity_30D_200.jpg", "Acuvue_15D_200.jpg", "Acuvue2_15D_200.jpg"];
var imgAlt = ["Lente Softlens", "Lente Bioinfinity", "Lente Acuvue Oasys", "Lente Acuvue 2"];
var fabricanteLente = ["Bauch & Lonb", "Coopervision", "Johnson & Johnson", "Johnson & Johnson"];
var periodoLente = ["30 dias", "30 dias", "15 dias", "15 dias"];
var precoLente = ["R$ 100,00", "R$ 180,00", "R$ 220,00", "R$ 170,00"];

function abrirJanela(c) {
    janela = open("","","resizable=yes, width=300, height=420");

    janela.document.write("<html> <head> <meta charset='utf-8'> <link rel='stylesheet' type='text/css' href= 'APDVOticaLentes.css'> </head>");
    janela.document.write("<body> <div class='janInfo''><h1>Modelo " + marcaLente[c] + "</h1>");
	janela.document.write("<img src='Imagens/" + imgLente[c] + "' alt='" + imgAlt + "'>");
    janela.document.write("<p>Fabricante: " + fabricanteLente[c] + "</p>");
    janela.document.write("<p>Período: " + periodoLente[c] + "</p>");
    janela.document.write("<p>Preço: " + precoLente[c] + "</p>");
    janela.document.write("<button onclick='window.close();'>Fechar</button></div></body></html>");
}


function fecharJanela() {
    window.close();
}

//--------------------------------------------------------------------------
//Página Armarções
/*
var imgInicial = "Imagens/vazio.jpg";

function trocarImagem1 () {
    document.getElementById("NomeArmacao").innerText="Oakley Wingfold";
    document.getElementById("CaixaImagem").src="Imagens/M_Oakley_100.jpg";
    document.getElementById("NomeGenero").innerText="Masculino";
    document.getElementById("PrecoArmacao").innerText="Preço: R$ 855,00";
}

function trocarImagem2 () {
    document.getElementById("NomeArmacao").innerText="Persol";
    document.getElementById("CaixaImagem").src="Imagens/M_Persol_100.jpg";
    document.getElementById("NomeGenero").innerText="Masculino";
    document.getElementById("PrecoArmacao").innerText="Preço: R$ 1377,00";
}

function trocarImagem3 () {
    document.getElementById("NomeArmacao").innerText="Ray-ban Round";
    document.getElementById("CaixaImagem").src="Imagens/M_Ray-ban_100.jpg";
    document.getElementById("NomeGenero").innerText="Masculino";
    document.getElementById("PrecoArmacao").innerText="Preço: R$ 666,00";
}

function trocarImagem4 () {
    document.getElementById("NomeArmacao").innerText="Kipling";
    document.getElementById("CaixaImagem").src="Imagens/F_Kipling_100.jpg";
    document.getElementById("NomeGenero").innerText="Feminino";
    document.getElementById("PrecoArmacao").innerText="Preço: R$ 423,00";
}

function trocarImagem5 () {
    document.getElementById("NomeArmacao").innerText="Michael Kors";
    document.getElementById("CaixaImagem").src="Imagens/F_MichaelKors_100.jpg";
    document.getElementById("NomeGenero").innerText="Feminino";
    document.getElementById("PrecoArmacao").innerText="Preço: R$ 684,00";
}
*/

//-------------------
let nomeArmacao = ["Oakley Wingfold","Persol","Ray-ban Round","Kipling","Michael Kors"];
let nomeImagem = ["Imagens/M_Oakley_100.jpg","Imagens/M_Persol_100.jpg","Imagens/M_Ray-ban_100.jpg","Imagens/F_Kipling_100.jpg","Imagens/F_MichaelKors_100.jpg", "Imagens/vazio.jpg"];
let nomeGenero = ["Masculino", "Feminino"];
let valorPreco = ["Preço: R$ 855,00", "Preço: R$ 1377,00", "Preço: R$ 666,00", "Preço: R$ 423,00", "Preço: R$ 684,00"];

function trocarProduto (nomeProduto) {
    if (nomeProduto == "Produto1") {
        document.getElementById("NomeArmacao").innerText=nomeArmacao[0];
        document.getElementById("CaixaImagem").src=nomeImagem[0];
        document.getElementById("NomeGenero").innerText=nomeGenero[0];
        document.getElementById("PrecoArmacao").innerText=valorPreco[0];
    } else if (nomeProduto == "Produto2") {
        document.getElementById("NomeArmacao").innerText=nomeArmacao[1];
        document.getElementById("CaixaImagem").src=nomeImagem[1];
        document.getElementById("NomeGenero").innerText=nomeGenero[0];
        document.getElementById("PrecoArmacao").innerText=valorPreco[1];
    } else if (nomeProduto == "Produto3") {
        document.getElementById("NomeArmacao").innerText=nomeArmacao[2];
        document.getElementById("CaixaImagem").src=nomeImagem[2];
        document.getElementById("NomeGenero").innerText=nomeGenero[0];
        document.getElementById("PrecoArmacao").innerText=valorPreco[2];
    } else if (nomeProduto == "Produto4") {
        document.getElementById("NomeArmacao").innerText=nomeArmacao[3];
        document.getElementById("CaixaImagem").src=nomeImagem[3];
        document.getElementById("NomeGenero").innerText=nomeGenero[1];
        document.getElementById("PrecoArmacao").innerText=valorPreco[3];
    } else if (nomeProduto == "Produto5") {
        document.getElementById("NomeArmacao").innerText=nomeArmacao[4];
        document.getElementById("CaixaImagem").src=nomeImagem[4];
        document.getElementById("NomeGenero").innerText=nomeGenero[1];
        document.getElementById("PrecoArmacao").innerText=valorPreco[4];
    } else {
        document.getElementById("NomeArmacao").innerText="";
        document.getElementById("CaixaImagem").src=nomeImagem[5];
        document.getElementById("NomeGenero").innerText="";
        document.getElementById("PrecoArmacao").innerText="";
    }
}


//--------------------------------------------------------------------------------------
//Página Formulário

/*
function incluirNomeProdutos () {
    //if (nomeProdutos == 'Bauch_&_Lonb_Softlens') {
        document.getElementsByClassName('#listaCompra').innerText = "Bauch & Lonb Softlens";
    //}
}
*/

//var textarea = document.querySelector('#listaCompra');
//var btnIncluir = document.querySelector('#btnIncluir');
//var caixaDeSelecao = document.querySelector('#CaixaProdutos').value;
/*
function atualizaSelect() {
    let CaixaDeSelecao = document.querySelector('#CaixaProdutos');
    let ValorOpcao = CaixaDeSelecao.options[CaixaDeSelecao.selectedIndex];
    let textarea = document.querySelector('#listaCompra');
    let texto = ValorOpcao.text;

    alert(texto);
    textarea.value += texto;
}

atualizaSelect();

btnIncluir.addEventListener('click', function() {
    textarea.value = caixaDeSelecao.value;
});



var textArea = document.getElementById('listaCompra').value = "";
var caixaDeSelecao = document.getElementById('caixaProdutos').value;

function preencherTextArea() {
    if (textArea == "") {
        var selectProduto = document.getElementById('caixaProdutos').selectedIndex;
        var optProduto = document.getElementById('caixaProdutos').options[selectProduto].text;
        var bandeiraCartao = document.getElementById('RadBand').value;
        var mesValidade = document.getElementById('mesVal').value;
        var anoValidade = document.getElementById('anoVal').value;
        var selectParcelas = document.getElementById('caixaParcelas').selectedIndex;
        var optParcela = document.getElementById('caixaParcelas').options[selectParcelas].text;
        document.getElementById("listaCompra").value = optProduto + "\n" + bandeiraCartao + "\n" + mesValidade + "\n" + anoValidade + "\n" + optParcela;
        
    } else {
        var selectProduto = document.getElementById('caixaProdutos').selectedIndex;
        var optProduto = document.getElementById('caixaProdutos').options[selectProduto].text;
        var bandeiraCartao = document.getElementById('RadBand').value;
        var mesValidade = document.getElementById('mesVal').value;
        var anoValidade = document.getElementById('anoVal').value;
        var selectParcelas = document.getElementById('caixaParcelas').selectedIndex;
        var optParcela = document.getElementById('caixaParcelas').options[selectParcelas].text;
        document.getElementById("listaCompra").value = optProduto + "\n" + bandeiraCartao + "\n" + mesValidade + "\n" + anoValidade + "\n" + optParcela;;
    }
}

var botao = document.querySelector('#btnIncluir');
function botaoIncluir(event) {
    event.preventDefault();
}
botao.addEventListener('click', botaoIncluir);
*/

//------------------------------------
/*
//var textArea = document.getElementById('listaCompra').value = "";
var textArea = document.getElementById('listaCompra').value;
var caixaDeSelecao = document.getElementById('caixaProdutos').value;

function preencherTextArea() {
    if (textArea == "") {
        var selectProduto = document.getElementById('caixaProdutos').selectedIndex;
        var optProduto = document.getElementById('caixaProdutos').options[selectProduto].text;
        document.getElementById('listaCompra').value = optProduto;
        
    } else {
        var selectProduto = document.getElementById('caixaProdutos').selectedIndex;
        var optProduto = document.getElementById('caixaProdutos').options[selectProduto].text;
        document.getElementById('listaCompra').value = textArea.value + "\n" + optProduto;
        calcPrecoTotal()
    }
}

var botao = document.querySelector('#btnIncluir');
function botaoIncluir(event) {
    event.preventDefault();
}
botao.addEventListener('click', botaoIncluir);

//Calculando o preço
var textAreaPreenchido = document.getElementById('listaCompra').value;
var nomeProdutos = ["Bauch_&_Lonb_Softlens", "Coopervision Bioinfinity", "Johnson Acuvue Oasys", "Johnson Acuvue 2"];
var precoProdutos = [" 100,00", " 180,00", " 220,00", " 170,00"];

function calcPrecoTotal() {
    if (textAreaPreenchido == nomeProdutos[0]) {
        document.getElementById("valTotal").value = precoProdutos[0];
    }
}
*/
//var precoDeCompra = ['', 100, 180, 220, 170, 855, 1377, 666, 423, 684];

function preencherTextArea() {
    //var texto = document.getElementById('caixaProdutos');
    //var marca = document.options[texto.selectedIndex].text;
    var textoSelect = document.getElementById('caixaProdutos').selectedIndex;
    var nomeSelecionado = document.getElementById('caixaProdutos').options[textoSelect].text;
    console.log(nomeSelecionado);
    var listaCompra = document.getElementById('listaCompra').innerHTML;

    listaCompra += nomeSelecionado + "\n";

    if (textoSelect.value == '0'){
        window.alert('Nenhum Produto Selecionado!');
    } else{
        document.getElementById('listaCompra').innerHTML = listaCompra;
    }
}

var botao = document.querySelector('#btnIncluir');
function botaoIncluir(event) {
    event.preventDefault();
}
botao.addEventListener('click', botaoIncluir);

var botao2 = document.querySelector('#btnTeste');
function botaoTeste(event) {
    event.preventDefault();
}
botao2.addEventListener('click', botaoTeste);

//Calculando o preço
var textAreaPreenchido = document.getElementById('listaCompra').text;
//var nomeProdutos = ["Bauch_&_Lonb_Softlens", "Coopervision Bioinfinity", "Johnson Acuvue Oasys", "Johnson Acuvue 2", ""];
//var precoProdutos = [100.00, 180.00, 220.00, 170.00];

function calcPrecoTotal() {
    /*if (textAreaPreenchido == nomeProdutos[0]) {
        document.getElementById("valTotal").innerHTML = precoProdutos[0];
        console.log('teste');
    }*/
    console.log('teste')
    var ProdutosListados = document.getElementById('listaCompra').value;
    if (ProdutosListados)
    document.getElementById('valTotal').innerHTML = precoProdutos[1];
}

function calcPrecoProdutos() {
    //for (i = 0; i < ProdutosListados.length; i++) {
    //    console.log('teste' + i);
    //}
    console.log('teste');
}

function pegandoDados() {
    //var bandeiraCartao = document.getElementById('RadBand').value;
    var mesValidade = document.getElementById('mesVal').value;
    var anoValidade = document.getElementById('anoVal').value;
    var numeroCard = document.getElementById('numCar').value;
    var selectParcelas = document.getElementById('caixaParcelas').selectedIndex;
    var optParcela = document.getElementById('caixaParcelas').options[selectParcelas].text;
    //document.getElementById("listaCompra").value = optProduto + "\n" + bandeiraCartao + "\n" + mesValidade + "\n" + anoValidade + "\n" + optParcela;
    //console.log(bandeiraCartao);
    console.log(mesValidade);
    console.log(anoValidade);
    console.log(numeroCard);
    console.log(optParcela);
}

function pegandoDadosTextArea() {
    var caixaDeTexto = document.getElementById('listaCompra').value;
    console.log(caixaDeTexto);
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
var produtoslistadosNoTextArea = [];

function preencherTextArea2() {
    //var texto = document.getElementById('caixaProdutos');
    //var marca = document.options[texto.selectedIndex].text;
    var textoSelect = document.getElementById('caixaProdutos').selectedIndex;
    var nomeSelecionado = document.getElementById('caixaProdutos').options[textoSelect].text;
    console.log(nomeSelecionado);
    var listaCompra = document.getElementById('listaCompra').innerHTML;

    listaCompra += nomeSelecionado + "\n";
    
    //parte do array
    produtoslistadosNoTextArea.push(nomeSelecionado);
    console.log(produtoslistadosNoTextArea);
    
    //-----------------------------------------------------------------------------------------------------------------------
    //Fazer for para percorrer os dados, depois comparar dados e preço e depois somar o preço (usar um array de produtos e outro com os preços)
    //-----------------------------------------------------------------------------------------------------------------------

    if (textoSelect.value == '0'){
        window.alert('Nenhum Produto Selecionado!');
    } else{
        document.getElementById('listaCompra').innerHTML = listaCompra;
    }
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var nomeProdutos = ["Bauch & Lonb Softlens", "Coopervision Bioinfinity", "Johnson Acuvue Oasys", "Johnson Acuvue 2", "Oakley Wingfold", "Persol", "Ray-ban Round", "Kipling", "Michael Kors"];
var precoProdutos = [100, 180, 220, 170, 855, 1377, 666, 423, 684];
var produtosVendidos = [];
var somandoPrecos = 0;

//Função que faz comparação de produtos
function somaPreco() {
    //for (i = 0; i <= produtoslistadosNoTextArea.length; i++){
        //Colocando os produtos do textarea no array
      //  produtosVendidos.push(produtoslistadosNoTextArea[i]);
     // console.log(produtosVendidos);
    //}
    for (j = 0; j <= produtoslistadosNoTextArea.length; j++){
        if (produtoslistadosNoTextArea[j] == nomeProdutos[0]){
            //var numParcelas = document.getElementById('caixaParcelas').selectedIndex;
            //var optParcelas = document.getElementById('caixaParcelas').options[numParcelas].text;
            //var tirandoX = optParcelas.replace('x', '');
            //var numeroParcelasNumber = parseInt(tirandoX);
            //var precoTotal = precoProdutos[i] * numeroParcelasNumber;
            var precoUnitario = precoProdutos[0];
            somandoPrecos = somandoPrecos + precoUnitario;
            //document.getElementById('valTotal').innerHTML = precoTotal + ',00';
    
            //Calculando o valor da parcela
            //var valorParcela = precoTotal / numeroParcelasNumber;
            //document.getElementById('qtdParcela').innerHTML = numeroParcelasNumber;
            //document.getElementById('valParcela').innerHTML = valorParcela + ',00';
    
        } else if (produtoslistadosNoTextArea[j] == nomeProdutos[1]){
            //var numParcelas = document.getElementById('caixaParcelas').selectedIndex;
            //var optParcelas = document.getElementById('caixaParcelas').options[numParcelas].text;
            //var tirandoX = optParcelas.replace('x', '');
            //var numeroParcelasNumber = parseInt(tirandoX);
            var precoUnitario = precoProdutos[1];
            somandoPrecos = somandoPrecos + precoUnitario;
            //document.getElementById('valTotal').innerHTML = precoTotal + ',00';
    
            //Calculando o valor da parcela
            //var valorParcela = precoTotal / numeroParcelasNumber;
            //document.getElementById('qtdParcela').innerHTML = numeroParcelasNumber;
            //document.getElementById('valParcela').innerHTML = valorParcela + ',00';
        } else if (produtoslistadosNoTextArea[j] == nomeProdutos[2]){
            var precoUnitario = precoProdutos[2];
            somandoPrecos = somandoPrecos + precoUnitario;

        } else if (produtoslistadosNoTextArea[j] == nomeProdutos[3]){
            var precoUnitario = precoProdutos[3];
            somandoPrecos = somandoPrecos + precoUnitario;

        } else if (produtoslistadosNoTextArea[j] == nomeProdutos[4]){
            var precoUnitario = precoProdutos[4];
            somandoPrecos = somandoPrecos + precoUnitario;

        } else if (produtoslistadosNoTextArea[j] == nomeProdutos[5]){
            var precoUnitario = precoProdutos[5];
            somandoPrecos = somandoPrecos + precoUnitario;

        } else if (produtoslistadosNoTextArea[j] == nomeProdutos[6]){
            var precoUnitario = precoProdutos[6];
            somandoPrecos = somandoPrecos + precoUnitario;

        } else if (produtoslistadosNoTextArea[j] == nomeProdutos[7]){
            var precoUnitario = precoProdutos[7];
            somandoPrecos = somandoPrecos + precoUnitario;

        } else if (produtoslistadosNoTextArea[j] == nomeProdutos[8]){
            var precoUnitario = precoProdutos[8];
            somandoPrecos = somandoPrecos + precoUnitario;

        } 

        //Somando tudo e apresentando
        precoTotal = somandoPrecos;
        var numParcelas = document.getElementById('caixaParcelas').selectedIndex;
        var optParcelas = document.getElementById('caixaParcelas').options[numParcelas].text;
        var tirandoX = optParcelas.replace('x', '');
        var numeroParcelasNumber = parseInt(tirandoX);
        var valorParcela = precoTotal / numeroParcelasNumber;
        document.getElementById('qtdParcela').innerHTML = numeroParcelasNumber;
        document.getElementById('valParcela').innerHTML = valorParcela + ',00';
        document.getElementById('valTotal').innerHTML = precoTotal + ',00';
    }     
}


function gerarTabuada() {
    let numeroPedido = document.getElementById('numeroEscolhido').value; 
    let numero = parseFloat(numeroPedido);
    let quadroResultado = document.getElementById('quadroResultado').value;

    //Gerando a tabuada
    for (i = 1; i <= 10; i++) {
        let numero = document.getElementById('numeroEscolhido').value; 
        let numeroConvertido = parseFloat(numero);
        let resultMult = numeroConvertido * i;
        let resultado = numeroConvertido + " x " + i + " = " + resultMult;
        let resultadoAnterior = document.getElementById('quadroResultado').value;
        document.getElementById('quadroResultado').innerHTML = resultadoAnterior + "\n" + resultado;
    }
}

function limparCampos() {
    document.getElementById('numeroEscolhido').value = "";
    document.getElementById('quadroResultado').value = "";
}

//----------------------------------------------------------------------------------------
function gerarTab() {
    numeroConvertido = prompt('Digite o número: ');

    for (i = 1; i < 11; i++) {
        let resultMult = numeroConvertido * i;
        let resultado = numeroConvertido + " x " + i + " = " + resultMult;
        let resultadoAnterior = document.getElementById('quadroResultado').value;
        document.getElementById('quadroResultado').innerHTML = resultadoAnterior + "\n" + resultado;
    }
}
//Calculadora de 4 operações
function calcular() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let operador = document.getElementById('operador').value;
    var resultado = document.getElementById('campoResultado').value;
    let numero1 = parseFloat(num1);
    let numero2 = parseFloat(num2);
    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2;

    if (operador == '+') {
        document.getElementById('campoResultado').value = soma;
    } else if (operador == '-') {
        document.getElementById('campoResultado').value = subtracao;
    } else if (operador == '*') {
        document.getElementById('campoResultado').value = multiplicacao;
    } else if (operador == '/') {
        document.getElementById('campoResultado').value = divisao;
    } else {
        alert('Erro! Tente novamente');
    }
}

var botao = document.getElementById('btnCalcular');
function botaoCalcular(event) {
    event.preventDefault();
}
botao.addEventListener('click', botaoCalcular);

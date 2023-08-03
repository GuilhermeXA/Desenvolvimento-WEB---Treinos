function calcIMC() {
    let dadoPeso = document.getElementById('inpPeso').value;
    let dadoAltura = document.getElementById('inpAltura').value;
    let peso = parseFloat(dadoPeso);
    let altura = parseFloat(dadoAltura);
    let resultado = peso / (altura * altura);
    document.getElementById('campoResultado').value = resultado.toFixed(2);
}
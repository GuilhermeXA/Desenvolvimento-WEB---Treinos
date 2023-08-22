function Converter() {
    var valorMoeda = parseFloat(document.getElementById("valMoeda").value);
    var qtdMoeda = parseFloat(document.getElementById("qtdMoeda").value);

    var calculoConversao = valorMoeda * qtdMoeda;

    // Atribua o resultado ao atributo value do campo resultadoMoeda
    document.getElementById("resultadoMoeda").value = calculoConversao.toFixed(2);
}

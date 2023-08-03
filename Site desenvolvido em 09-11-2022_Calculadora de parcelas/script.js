function calcularParcelas() {
    let valTotal = document.getElementById("valTotal").value;
    let qtdParcelas = document.getElementById("qtdParcelas").value;
    let valorTotal = parseFloat(valTotal);
    let quantidadeParcelas = parseFloat(qtdParcelas);
    let calcParcelas = valorTotal / quantidadeParcelas;

    for (i = 1; i <= qtdParcelas; i++) {
        let valorAnterior = document.getElementById('areaResultado').value;
        document.getElementById('areaResultado').innerHTML = valorAnterior + "\n" + i + "º Parcela = " + calcParcelas.toFixed(2);
        //console.log(calcParcelas);
    }
}
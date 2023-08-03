document.getElementById("calcular").addEventListener("click", function() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura * altura);

    var resultadoP = document.getElementById("resultado");
    resultadoP.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " Na categoria: " + classificacaoIMC(resultadoP);
});

function classificacaoIMC(resultadoP) {
    if (resultadoP < 18.50) {
        return 'Magreza';
    }
    else if (resultadoP >= 18.50 && resultadoP <= resultadoP <= 24.99) {
        return 'Normal';
    }
    else if (resultadoP >= 25.00 && resultadoP <= resultadoP <= 29.99) {
        return 'Sobrepeso';
    }
    else if (resultadoP >= 30.00 && resultadoP <= resultadoP <= 39.99) {
        return 'Obesidade I';
    }
    else if (resultadoP >= 40) {
        return 'Obesidade II';
    }
}
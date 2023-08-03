document.getElementById("calcular").addEventListener("click", function() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura * altura);

    var resultadoP = document.getElementById("resultado");
    resultadoP.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " Na categoria: " + classificacaoIMC(imc);
});

function classificacaoIMC(imc) {
    if (imc < 18.50) {
        return 'Magreza';
    }
    else if (imc >= 18.50 && imc <= 24.99) {
        return 'Normal';
    }
    else if (imc >= 25.00 && imc <= 29.99) {
        return 'Sobrepeso';
    }
    else if (imc >= 30.00 && imc <= 39.99) {
        return 'Obesidade I';
    }
    else if (imc >= 40) {
        return 'Obesidade II';
    }
}

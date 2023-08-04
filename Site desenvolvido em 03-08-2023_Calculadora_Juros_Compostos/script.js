document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    calcular();
})

const calcular = () => {
    const capital = parseFloat(calculadora.capital.value);
    const taxa = parseFloat(calculadora.taxa.value) / 100;
    const meses = parseFloat(calculadora.meses.value);

    var montante = capital * Math.pow(1 + taxa, meses);
    montante = montante.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    document.querySelector("span").innerHTML = montante;
}
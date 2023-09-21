function separateValues() {
    // Obter o valor da caixa de texto
    const input = document.getElementById('inputValues').value;

    // Dividir os valores em um array usando espaço como separador
    const valuesArray = input.split(' ');

    // Inicializar arrays para valores e valores pares
    const allValues = [];
    const evenValues = [];

    // Loop através dos valores e separar os pares
    for (let i = 0; i < valuesArray.length; i++) {
        const value = parseInt(valuesArray[i]);
        allValues.push(value);

        if (!isNaN(value) && value % 2 === 0) {
            evenValues.push(value);
        }
    }

    // Atualizar o conteúdo das áreas de texto
    document.getElementById('allValues').value = allValues.join('\n');
    document.getElementById('evenValues').value = evenValues.join('\n');
}

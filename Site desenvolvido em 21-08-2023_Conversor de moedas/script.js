document.addEventListener("DOMContentLoaded", function () {
    const currencySelect = document.getElementById("currency");
    const currencyValueInput = document.getElementById("currencyValue");
    const quantityInput = document.getElementById("quantity");
    const reaisValueInput = document.getElementById("reaisValue");
    const calculateButton = document.getElementById("calculate");

    const currencyRates = {
        dolar: 5.24,
        euro: 6.18,
        libra: 7.10,
    };

    currencySelect.addEventListener("change", function () {
        const selectedCurrency = currencySelect.value;

        if (selectedCurrency in currencyRates) {
            currencyValueInput.value = currencyRates[selectedCurrency];
        }
    });

    calculateButton.addEventListener("click", function () {
        const selectedCurrency = currencySelect.value;
        const value = parseFloat(currencyValueInput.value);
        const quantity = parseFloat(quantityInput.value);

        if (selectedCurrency in currencyRates) {
            const rate = currencyRates[selectedCurrency];
            const reaisValue = (value * quantity * rate).toFixed(2);
            reaisValueInput.value = reaisValue;
        }
    });
});

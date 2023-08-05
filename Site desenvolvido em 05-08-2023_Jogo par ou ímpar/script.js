function play() {
    const computerNumberChoice = parseInt(randomNumber(1, 5));
    const playerChoice = document.querySelector("select").selectedIndex;
    const playerNumberChoice = parseInt(document.querySelector("input").value);

    //console.log(computerChoice, playerChoice, playNumberChoice);
    if (playerNumberChoice < 1 || playerNumberChoice > 5 || isNaN(playerNumberChoice)) {
        alert("Escolha um número de 1 a 5");
        return;
    }

    const sum = computerNumberChoice + playerNumberChoice;

    const result = sum % 2;

    //0 é par e 1 é ímpar
    if ((playerChoice == 0 && result == 0) || (playerChoice == 1 && result > 0)) {
        document.querySelector('p').innerHTML = "Você ganhou";
        document.querySelector('p').style.color = "greenyellow";
    }
    else {
        document.querySelector('p').innerHTML = "Você perdeu";
        document.querySelector('p').style.color = "indianred";
    }
    
    document.querySelectorAll('p')[1].innerHTML = "Número jogado pelo computador: " + computerNumberChoice;
    document.querySelector('h4').innerHTML = sum + " => " + (result == 0 ? "Deu par" : "Deu Ímpar");
}

function randomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed();
}
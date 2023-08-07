function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    document.getElementById("hours").innerHTML = addZero(hours);
    document.getElementById("minutes").innerHTML = addZero(minutes);
    document.getElementById("seconds").innerHTML = addZero(seconds);
}

function addZero(number) {
    if (number < 10) {
        return "0" + number;
    } else {
        return number;
    }
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Inicializa o relógio ao carregar a página
updateClock();

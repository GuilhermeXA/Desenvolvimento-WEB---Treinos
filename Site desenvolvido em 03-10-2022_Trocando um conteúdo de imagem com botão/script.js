var imgAtual = "paisagem2.jpg";
var imgAnterior = "paisagem1.jpg";

function trocar() {
	document.getElementById("figura").src = imgAtual;
	let aux = imgAtual;
	imgAtual = imgAnterior;
	imgeAnterior = aux;
}
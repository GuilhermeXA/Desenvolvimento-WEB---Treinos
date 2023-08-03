function RegistrarDados() {
    let nome  = document.getElementById('inpNome').value;
    let quantidade = document.getElementById('inpQuantidade').value;
    let preco = document.getElementById('inpPreco').value;
    let textarea = document.getElementById('inpTextArea').value;

    document.getElementById('inpTextArea').innerHTML = textarea + "\n" + nome + " " + quantidade + " " + preco;
}

function abrirJanelaRegistro() {
    let textarea = document.getElementById('inpTextArea').value;

    janela = open("","","resizable=yes, width=400, height=500");

    janela.document.write("<html> <head> <meta charset='utf-8'></head>");
    janela.document.write("<body><h1>Registro de produtos</h1>");
    janela.document.write("<p>" + textarea + "</p>")
    janela.document.write("<button onclick='window.close();'>Fechar</button></div></body></html>");

}

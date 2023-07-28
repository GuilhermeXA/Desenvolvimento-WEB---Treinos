function cadastrar() {
    const id = document.getElementById("id").value;
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const telefone = document.getElementById("telefone").value;
    const dataCadastro = document.getElementById("dataCadastro").value;

    const dadosFormatados = `ID: ${id}\nNome: ${nome}\nEndereço: ${endereco}\nTelefone: ${telefone}\nData de Cadastro: ${dataCadastro}`;
    alert(dadosFormatados);
}

function limpar() {
    document.getElementById("id").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("dataCadastro").value = "";
}


function cadastrarNoArquivo() {
    document.getElementById("cadastroForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Obter os valores dos campos
        var id = document.getElementById("id").value;
        var nome = document.getElementById("nome").value;
        var endereco = document.getElementById("endereco").value;
        var telefone = document.getElementById("telefone").value;

        // Criar uma string com os dados do cadastro
        var registro = "ID: " + id + "\nNome: " + nome + "\nEndereço: " + endereco + "\nTelefone: " + telefone + "\n";

        // Criar um novo Blob com os dados do registro
        var blob = new Blob([registro], { type: "text/plain" });

        // Criar uma URL temporária para o Blob
        var url = URL.createObjectURL(blob);

        // Criar um link de download para o arquivo
        var link = document.createElement("a");
        link.href = url;
        link.download = "file1.txt";
        link.style.display = "none";

        // Adicionar o link ao corpo da página e clicar nele
        document.body.appendChild(link);
        link.click();

        // Remover o link após o download
        document.body.removeChild(link);

        alert("Deu certo!");
    });
}
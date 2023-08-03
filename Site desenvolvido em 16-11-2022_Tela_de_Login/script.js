function logar() {
    let nome = document.getElementById('txtNome').value;
    let senha = document.getElementById('txtSenha').value;

    if (nome == 'Fulano' && senha == '123') {
        janela = open("","","resizable=yes, width=500, height=500");
        janela.document.write("<html> <head> <meta charset='utf-8'> <link rel='stylesheet' type='text/css' href= 'style.css'> </head>");
        janela.document.write("<body><h1>Bem vindo a sua conta Fulano!</h1></body></html>");
    } else if (nome != 'Fulano' && senha == '123'){
        alert('Nome do usuário Inválido!');
        document.getElementById('txtNome').value = '';
        document.getElementById('txtNome').focus();    
    } else if (nome == 'Fulano' && senha != '123'){
        alert('Senha Inválida!');
        document.getElementById('txtSenha').value = '';
        document.getElementById('txtSenha').focus();    
    } else {
        alert('Usuário e Senha inválidos!');
        limparCampos();
    }
}

function limparCampos() {
    document.getElementById('txtNome').value = '';
    document.getElementById('txtSenha').value = '';
}

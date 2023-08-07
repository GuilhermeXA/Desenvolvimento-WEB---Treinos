// script.js
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('listaTarefas');

btnAdicionar.addEventListener('click', () => {
    const tarefa = document.getElementById('tarefa').value;
    const data = document.getElementById('data').value;
    
    if (tarefa && data) {
        const li = document.createElement('li');
        li.innerHTML = `${tarefa} - ${data}
        <button class="btnEditar">Editar</button>
        <button class="btnExcluir">Excluir</button>`;
        listaTarefas.appendChild(li);

        document.getElementById('tarefa').value = '';
        document.getElementById('data').value = '';

        const btnEditar = li.querySelector('.btnEditar');
        btnEditar.addEventListener('click', () => {
            const novoNome = prompt('Digite o novo nome da tarefa:');
            if (novoNome) {
                li.innerHTML = `${novoNome} - ${data}
                <button class="btnEditar">Editar</button>
                <button class="btnExcluir">Excluir</button>`;
                listaTarefas.appendChild(li);
            }
        });

        const btnExcluir = li.querySelector('.btnExcluir');
        btnExcluir.addEventListener('click', () => {
            li.remove();
        });
    }
});

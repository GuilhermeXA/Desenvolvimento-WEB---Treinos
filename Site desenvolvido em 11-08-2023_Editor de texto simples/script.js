const editor = document.getElementById('editor');
const file_input = document.getElementById('file_input');
const btnSave = document.getElementById('save');

file_input.addEventListener('change', () => {
    const file = file_input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        editor.value = reader.result;
    };
    
    reader.readAsText(file);
});

btnSave.addEventListener('click', () => {
    const text = editor.value;
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement('a');

    link.download = "arquivo_texto.txt";
    link.href = URL.createObjectURL(blob);
    link.click();
});
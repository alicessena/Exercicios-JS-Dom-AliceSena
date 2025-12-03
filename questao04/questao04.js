function validarFormulario() {
    const nome = document.getElementById('nome').value.trim(); 
    const cpf = document.getElementById('cpf').value.trim();
    const mensagemElement = document.getElementById('mensagem');
    
    const cpfValidoRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    mensagemElement.innerText = '';
    mensagemElement.style.color = 'black';
    
    if (nome === '' || cpf === '') {
        mensagemElement.innerText = 'Os campos Nome e CPF são obrigatórios.';
        mensagemElement.style.color = 'red';
        return; 
    }
    
    if (!cpfValidoRegex.test(cpf)) {
        mensagemElement.innerText = 'CPF inválido! Use o formato 000.000.000-00.';
        mensagemElement.style.color = 'red';
        return; 
    }
    
    mensagemElement.innerText = 'Cadastro validado com sucesso!';
    mensagemElement.style.color = 'green';
}
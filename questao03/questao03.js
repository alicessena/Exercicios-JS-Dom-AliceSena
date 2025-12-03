function cadastrarUsuario() {
    const nome = document.getElementById('nome').value;
    const dataNasc = document.getElementById('dataNasc').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('uf').value;
    
    const fraseResultado = `${nome} nasceu no dia ${dataNasc} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${estado}.`;
    
    const resultadoElement = document.getElementById('resultado');
    
    resultadoElement.innerText = fraseResultado;
    
    resultadoElement.style.color = 'green';
    resultadoElement.style.fontSize = '24px';
    resultadoElement.style.fontWeight = '600';
}
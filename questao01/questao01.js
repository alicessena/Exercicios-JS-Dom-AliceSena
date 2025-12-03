function inserirTitulo() {
    const inputElement = document.getElementById('txt-titulo');
    const novoTexto = inputElement.value;
    
    const tituloElement = document.getElementById('titulo');
    
    tituloElement.innerText = novoTexto;
    
    tituloElement.style.color = 'blue';
    tituloElement.style.transition = 'color 0.3s ease'; 
}
function mudarForma() {
    const formaElement = document.getElementById('forma');
    const buttonElement = document.getElementById('btn-forma');
    
    const isCircle = formaElement.style.borderRadius === '50%' || formaElement.style.borderRadius === '';
    if (isCircle) {
        formaElement.style.borderRadius = '0%';
        buttonElement.innerText = 'Retornar forma original';
    } else {
        formaElement.style.borderRadius = '50%';
        buttonElement.innerText = 'Mudar forma';
    }
}
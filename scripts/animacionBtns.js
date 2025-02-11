window.addEventListener('load', () => {
    const botones = document.querySelectorAll('.btnCategoria');
    
    botones.forEach((boton, index) => {
        setTimeout(() => {
            boton.classList.add('show');
        }, index * 300); // Retraso de 300 ms entre cada botón
    });
});
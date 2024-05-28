document.addEventListener('DOMContentLoaded', function() {
    // Implementação de animações e interatividade para o site principal

    // Exemplo de animação com CSS
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add('hovered');
        });
        button.addEventListener('mouseout', () => {
            button.classList.remove('hovered');
        });
    });

    // Menu de navegação
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Slider de imagem
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndex) ? 'block' : 'none';
        });
        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(showSlides, 3000); // Muda a cada 3 segundos
    }
    showSlides();
});

const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    // Alterna a classe 'open' para mudar o visual do ícone
    menuToggle.classList.toggle('open');

});
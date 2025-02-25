// Selecionando o ícone hamburguer e o menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav ul');

// Adiciona um evento de clique no hambúrguer
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active'); // Alterna a classe 'active' no menu
    hamburger.classList.toggle('active'); // Opcional: adicionar estilo no hambúrguer ao ser clicado
});

document.getElementById("theme-toggle").addEventListener("click", function() {
    // Alterna a classe "dark-theme" no body
    document.body.classList.toggle("dark-theme");

    // Seleciona todos os elementos que devem ter a classe "dark-theme" adicionada/alternada
    const elements = document.querySelectorAll('.navbar, .header-container, header, main, p, button, .button-description');

    // Alterna a classe "dark-theme" em todos os elementos selecionados
    elements.forEach(element => {
        element.classList.toggle("dark-theme");
    });

    // Alterna o ícone entre sol e lua
    const themeIcon = document.getElementById("theme-icon");
    themeIcon.textContent = document.body.classList.contains("dark-theme") ? "🌜" : "🌞"; // Muda o ícone
});

let isDarkMode = false;

document.getElementById('theme-toggle').addEventListener('click', function() {
    isDarkMode = !isDarkMode; // Alterna entre true e false

    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    if (isDarkMode) {
        body.classList.add('dark'); // Adiciona a classe para tema escuro
        themeIcon.textContent = '🌙'; // Muda o ícone para lua
    } else {
        body.classList.remove('dark'); // Remove a classe para tema escuro
        themeIcon.textContent = '🌞'; // Muda o ícone para sol
    }
});
console.log("Script carregado");

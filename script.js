
                    // JS para parte dark do site
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    
    const elements = document.querySelectorAll('.navbar, .nav-button, .hero-section, .buttons-container, .laws-section, .info-section, .team-section, .footer, .arrows-container, .button-step, .hero-content');
    
    elements.forEach(element => {
        element.classList.toggle("dark-theme");
    });

    const themeIcon = document.getElementById("theme-icon");
    themeIcon.textContent = document.body.classList.contains("dark-theme") ? "🌜" : "🌞"; // Muda o ícone
});

                // JS para movimentação do blog
function scrollLinks(direction) {
    const container = document.querySelector('.links-container');
    const scrollAmount = 200; // Quantidade a ser rolada

    if (direction === 'right') {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
}
             // js para navbar modo celular

document.getElementById('menu-icon').addEventListener('click', function() {
    const navButtons = document.getElementById('nav-buttons');
    navButtons.classList.toggle('active'); // Alterna a classe "active"
});


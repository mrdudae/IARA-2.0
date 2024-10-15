document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    
    const elements = document.querySelectorAll('.navbar, .hero-section, .buttons-container, .laws-section, .info-section, .team-section, .footer, .arrows-container, .button-step, .hero-content');
    
    elements.forEach(element => {
        element.classList.toggle("dark-theme");
    });

    const themeIcon = document.getElementById("theme-icon");
    themeIcon.textContent = document.body.classList.contains("dark-theme") ? "🌜" : "🌞"; // Muda o ícone
});
function scrollLinks(direction) {
    const container = document.querySelector('.links-container');
    const scrollAmount = 200; // Quantidade a ser rolada

    if (direction === 'right') {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
}

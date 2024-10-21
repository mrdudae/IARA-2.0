document.getElementById('chatButton').addEventListener('click', function() {
    window.location.href = 'chat.html'; // Redireciona para a página do chat
});

document.getElementById('scheduleButton').addEventListener('click', function() {
    window.location.href = 'agendar.html'; // Redireciona para a página de agendamento
});

// navbar

document.getElementById('menu-icon').addEventListener('click', function() {
    const navButtons = document.getElementById('nav-buttons');
    navButtons.classList.toggle('active'); // Alterna a classe "active"
});

    document.addEventListener("DOMContentLoaded", function () {
        const menuIcon = document.querySelector('.menu-icon');
        const navButtons = document.querySelector('.nav-buttons');
        const navLinks = document.querySelectorAll('.nav-button');

        // Alterna o menu ao clicar no ícone
        menuIcon.addEventListener('click', function () {
            navButtons.classList.toggle('show'); // Mostra ou oculta o menu
        });

        // Fecha o menu ao clicar em qualquer link
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navButtons.classList.remove('show'); // Fecha o menu
            });
        });
    });


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

                                    // politica de privacide

    // Verificar se o usuário já aceitou ou recusou
    const privacyModal = document.getElementById('privacy-modal');
    const acceptBtn = document.getElementById('accept-btn');
    const rejectBtn = document.getElementById('reject-btn');

    // Caso o usuário aceite
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('privacyAccepted', 'true');
        privacyModal.style.display = 'none'; // Esconde o modal
    });

    // Caso o usuário recuse
    rejectBtn.addEventListener('click', function() {
        window.open('', '_self').close();
        window.location.href = 'https://www.google.com';
    });
    
    // Verifica se a política de privacidade foi aceita
    if (!localStorage.getItem('privacyAccepted')) {
        privacyModal.style.display = 'flex'; // Exibe o modal
    }
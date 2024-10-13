function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
// Função para aceitar a política de privacidade
function acceptPrivacy() {
    document.getElementById('privacy-notification').style.display = 'none';
    // Aqui você pode adicionar código para salvar a aceitação, se necessário
}

// Função para rejeitar a política de privacidade
function rejectPrivacy() {
    alert("Você rejeitou a política de privacidade. Você pode sair do site.");
    // Aqui você pode adicionar código para redirecionar ou fechar a aba
}

// Exibir a notificação ao carregar a página
window.onload = function() {
    document.getElementById('privacy-notification').style.display = 'block';
}
function shadeColor(color, percent) {
    const num = parseInt(color.slice(1), 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        G = (num >> 8 & 0x00FF) + amt,
        B = (num & 0x0000FF) + amt;

    return "#" + (0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 1 ? 0 : B) : 255)).toString(16).slice(1).toUpperCase();
}

// Alternar entre tema claro e escuro
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
});
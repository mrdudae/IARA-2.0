// Função para alternar o modo escuro
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

// Verifica o modo escuro salvo no carregamento da página
window.addEventListener("load", () => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "true") {
        document.body.classList.add("dark-mode");
    }
});

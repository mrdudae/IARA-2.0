function voltar() {
    window.history.back(); // Volta para a tela anterior
}

function enviarMensagem() {
    const input = document.getElementById('messageInput');
    const messageText = input.value;

    if (messageText.trim() !== "") {
        const messagesDiv = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.textContent = messageText;
        messagesDiv.appendChild(newMessage);
        input.value = ""; // Limpa o campo de entrada
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Rola para a última mensagem
    }
}

// Adicione isso ao seu arquivo script.js

let isDyslexiaMode = false;

function toggleDyslexiaMode() {
    isDyslexiaMode = !isDyslexiaMode;
    const body = document.body;

    if (isDyslexiaMode) {
        body.classList.add('accessibility');
    } else {
        body.classList.remove('accessibility');
    }
}

document.querySelector('.accessibility-button').addEventListener('click', toggleDyslexiaMode);

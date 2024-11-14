// Referência aos elementos no DOM
const userInput = document.getElementById('messageInput');
const messagesDiv = document.getElementById('messages');
const sendButton = document.getElementById('sendButton');

// Função para adicionar mensagens na caixa de chat
function addMessage(content, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    // Diferenciar as mensagens do usuário e do bot com base na classe
    if (sender === 'user') {
        messageElement.classList.add('sent'); // Aplica o estilo para mensagens enviadas pelo usuário
    } else if (sender === 'bot') {
        messageElement.classList.add('bot'); // Aplica o estilo para mensagens do bot
    }

    messageElement.innerHTML = content;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll automático para o final
}

// Função para enviar uma mensagem ao bot via API
async function sendMessage(message) {
    try {
        const response = await fetch('http://localhost:9000/mensagens/', { // Verifique se essa URL está correta
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            body: JSON.stringify({ mensagem: message })
        });

        if (response.ok) {
            const arrayBuffer = await response.arrayBuffer(); // Obtemos um ArrayBuffer
            const decoder = new TextDecoder('utf-8'); // Criamos um decodificador
            const respostaBot = decoder.decode(arrayBuffer); // Decodificamos a resposta
            addMessage(respostaBot, 'bot');
        } else {
            addMessage('Desculpe, não consegui me comunicar com o bot.', 'bot');
        }
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        addMessage('Desculpe, algo deu errado.', 'bot');
    }
}


// Função para processar a mensagem
function processMessage() {
    const message = userInput.value;
    if (message.trim() !== "") {
        addMessage(message, 'user'); // Adiciona a mensagem do usuário com a classe 'sent'
        userInput.value = ''; // Limpa o campo de entrada
        sendMessage(message); // Envia a mensagem para a API do bot
    }
}

// Evento de clique no botão "Enviar"
sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    processMessage();
});

// Evento para capturar a tecla Enter no campo de input
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // Impede o comportamento padrão do Enter (submit)
        processMessage();
    }
});

                                                //tema dark

document.getElementById("theme-toggle").addEventListener("click", function() {
    // Alterna a classe "dark-theme" no body
    document.body.classList.toggle("dark-theme");

    // Seleciona todos os elementos que devem ter a classe "dark-theme" adicionada/alternada
    const elements = document.querySelectorAll(
        '.navbar, body, .header-container, header, main, p, button, .button-description, .chat-container, .input-container, .messages, .message'
    );

    // Alterna a classe "dark-theme" em todos os elementos selecionados
    elements.forEach(element => {
        element.classList.toggle("dark-theme");
    });

    // Alterna o ícone entre sol e lua
    const themeIcon = document.getElementById("theme-icon");
    themeIcon.textContent = document.body.classList.contains("dark-theme") ? "🌜" : "🌞"; // Muda o ícone
});

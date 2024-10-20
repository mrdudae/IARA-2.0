// Referência aos elementos no DOM
const chatForm = document.querySelector('.input-container'); // Atualizado para corresponder ao HTML
const userInput = document.getElementById('messageInput');
const messagesDiv = document.getElementById('messages');
const sendButton = document.getElementById('sendButton');

// Função para adicionar mensagens na caixa de chat
function addMessage(content, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = content;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll automático para o final
}

// Função para enviar uma mensagem ao bot via API
async function sendMessage(message) {
    try {
        const response = await fetch('http://localhost:9000/mensagens/', { // URL do seu backend
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mensagem: message }) // Enviando a mensagem do usuário
        });

        if (response.ok) {
            const respostaBot = await response.text(); // Recebendo a resposta como texto
            addMessage(respostaBot, 'bot'); // Adiciona a resposta do bot na tela
        } else {
            addMessage('Desculpe, não consegui me comunicar com o bot.', 'bot');
        }
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        addMessage('Desculpe, algo deu errado.', 'bot');
    }
}

// Manipulador de envio de formulário (submit ou clique no botão)
chatForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio do formulário
    const message = userInput.value;
    if (message.trim() !== "") {
        addMessage(message, 'user'); // Adiciona a mensagem do usuário
        userInput.value = ''; // Limpa o campo de entrada
        sendMessage(message); // Envia a mensagem para a API do bot
    }
});

// Alternativa: Evento de clique no botão "Enviar"
sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    const message = userInput.value;
    if (message.trim() !== "") {
        addMessage(message, 'user');
        userInput.value = '';
        sendMessage(message);
    }
});

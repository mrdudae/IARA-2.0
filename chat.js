// Certifique-se de que o DOM foi carregado antes de acessar os elementos
document.addEventListener('DOMContentLoaded', () => {
    // Botão de enviar mensagem
    const sendButton = document.getElementById('send-btn');
    const messageInput = document.getElementById('message-input');
    const chatBox = document.getElementById('chat-box');

    if (!sendButton || !messageInput || !chatBox) {
        console.error('Elementos essenciais não encontrados no DOM.');
        return;
    }

    // Evento de clique no botão "Enviar"
    sendButton.addEventListener('click', () => {
        processMessage();
    });

    // Função para adicionar mensagens ao chat
    function addMessage(message, type) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', type);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);

        // Rolando para a última mensagem
        messageElement.scrollIntoView({ behavior: 'smooth' });
    }

    // Função para enviar mensagem ao bot via API
    async function sendMessage(message) {
        try {
            const response = await fetch('https://back-end-iara.onrender.com/mensagens/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
                body: JSON.stringify({ mensagem: message }),
            });

            if (response.ok) {
                const respostaBot = await response.text(); // Recebe a resposta como texto diretamente
                addMessage(respostaBot, 'received'); // Adiciona a resposta ao chat
            } else {
                addMessage('Erro na comunicação com o bot.', 'received');
            }
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            addMessage('Erro ao conectar-se ao servidor.', 'received');
        }
    }

    // Função para processar a entrada do usuário
    function processMessage() {
        const userMessage = messageInput.value.trim();

        if (userMessage) {
            addMessage(userMessage, 'sent'); // Exibe a mensagem do usuário
            messageInput.value = ''; // Limpa o campo de entrada
            sendMessage(userMessage); // Envia a mensagem para o bot
        }
    }

    // Captura a tecla Enter para enviar mensagens
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            processMessage();
        }
    });
    
});

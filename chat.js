document.getElementById('send-btn').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const chatBox = document.getElementById('chat-box');

    const userMessage = messageInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, 'sent');
        messageInput.value = '';

        setTimeout(() => {
            addMessage('Esta é uma resposta automática.', 'received');
        }, 1000);
    }
});

function addMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.textContent = message;
    document.getElementById('chat-box').appendChild(messageElement);
    messageElement.scrollIntoView({ behavior: 'smooth' });
}

// Menu Hamburguer
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});




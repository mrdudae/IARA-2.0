const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar o serviço de e-mail (substitua com suas credenciais do Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vrlengaspar171@gmail.com', // substitua pelo seu email
    pass: 'Varle' // substitua pela sua senha
  }
});

// Rota para enviar o e-mail
app.post('/send-email', (req, res) => {
  const { message } = req.body;

  const mailOptions = {
    from: 'varlengaspar171@gmail.com',
    to: 'sistemaiaraa@gmail.com',
    subject: 'Nova Mensagem do Usuário',
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Erro ao enviar o e-mail');
    }
    res.status(200).send('E-mail enviado com sucesso');
  });
});

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

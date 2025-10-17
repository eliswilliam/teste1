const nodemailer = require('nodemailer');
require('dotenv').config(); // Charge les variables depuis .env

const user = process.env.GMAIL_USER;
const pass = process.env.GMAIL_PASS;

if (!user || !pass) {
  console.error("❌ Les variables GMAIL_USER et GMAIL_PASS ne sont pas définies.");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: { user, pass }
});

const mailOptions = {
  from: 'eliswilliam01@gmail.com',
  to: 'eliswilliam01@gmail.com',
  subject: "Test d'envoi d'email",
  text: "Ceci est un test d'envoi d'email avec Nodemailer.",
  html: "<h1>Ceci est un test d'envoi d'email avec Nodemailer.</h1>"
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('❌ Erreur lors de l\'envoi de l\'email:', error);
  } else {
    console.log('✅ Email envoyé avec succès:', info.response);
  }
});
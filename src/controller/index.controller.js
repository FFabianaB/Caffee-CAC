// src/controllers/homeController.js

// Controlador para la página de inicio
function getIndexPage(req, res) {
    // Lógica para renderizar o enviar datos
    res.sendFile('index.html', { root: './public' });
  }
  
  module.exports = {
    getIndexPage,
  };
  
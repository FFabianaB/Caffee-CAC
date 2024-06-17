const express = require('express');
const path = require('path');
const routes = express.Router();

// Ruta para la raíz
routes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = routes;
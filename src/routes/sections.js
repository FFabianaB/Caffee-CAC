const express = require('express');
const path = require('path');
const routes = express.Router();

// Rutas para cada sección

app.use(express.static(path.join(__dirname, '../public')));

routes.get('/productos', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/productos.html'));
});

routes.get('/sucursales', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/sucursales.html'));
});

routes.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/contacto.html'));
});

module.exports = routes;

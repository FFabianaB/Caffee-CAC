const express = require('express');
const app = express;
const path = require('path');
const routes = express.Router();




// Configurar las rutas
routes.get('/productos', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/pages/productos.html'));
});

routes.get('/sucursales', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/pages/sucursales.html'));
});

routes.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/pages/contacto.html'));
});

routes.get('/sesion', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/pages/sesion.html'));
});
routes.get('/carrito', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/pages/carrito.html'));
});

module.exports = routes;

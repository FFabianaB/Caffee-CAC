const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir archivos estáticos en la carpeta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Rutas para cada sección
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/productos', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/productos.html'));
});

app.get('/sucursales', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/sucursales.html'));
});

app.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/contacto.html'));
});

// Exportar la aplicación para Vercel
module.exports = app;

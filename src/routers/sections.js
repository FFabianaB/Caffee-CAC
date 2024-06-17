const express = require('express');
const path = require('path');
const router = express.Router();

// Rutas para cada sección

app.use(express.static(path.join(__dirname, '../public')));


router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/productos', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/productos.html'));
});

router.get('/sucursales', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/sucursales.html'));
});

router.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/contacto.html'));
});

module.exports = router;

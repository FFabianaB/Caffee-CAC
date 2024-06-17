// src/index.js

const express = require('express');
const path = require('path');

const app = express();

// Configurar middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Importar y usar las rutas definidas en otro archivo
const routes = require('./routes');
app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

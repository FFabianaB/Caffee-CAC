const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir archivos estáticos en la carpeta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Importar las rutas relativas
const indexRoutes = require('./routes/index');
const sectionsRouter = require('./routes/sections');

// Usar las rutas
app.use('/', indexRoutes);
app.use('/sections', sectionsRouter);

// Exportar la aplicación para Vercel
module.exports = app;

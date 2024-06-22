const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
// Middleware para servir archivos estáticos en la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));


app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app .listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
})

// Ruta para productos.html (opcional si se quiere una ruta específica)
app.get('/pages/productos.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/productos.html'));
});

// Importar las rutas
const indexRouter = require('./src/routes/index.routes');
const sectionsRouter = require('./src/routes/sections');

// Usar las rutas
app.use('/', indexRouter);
app.use('/', sectionsRouter);

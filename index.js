const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
app .listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
})



// Middleware para servir archivos estáticos en la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));


// app.get ('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// })
// Ruta para productos.html (opcional si se quiere una ruta específica)
// app.get('/pages/productos.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/pages/productos.html'));
// });

// // Importar las rutas
// const indexRouter = require('./src/routes/index.routes');
// const sectionsRouter = require('./src/routes/sections');
// const fakestore = require('./src/routes/fakestore');
// // Usar las rutas
// app.use('/', indexRouter);
// app.use('/', sectionsRouter);
// app.use('/', fakestore);

// Forma abreviada: 
app.use('/fakestore',require('./src/routes/fakestore'));
app.use('/home',require('./src/routes/index.routes'));
app.use('/',require('./src/routes/sections'));




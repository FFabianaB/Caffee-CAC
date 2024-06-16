const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; //si el 3k no está disponible ofrece otro puerto
app.use(express.static('public')); // Sirve archivos estáticos desde la carpeta 'public'

app.listen(PORT, () => {
  console.log('Servidor escuchando en el puerto 3000 http://localhost:${PORT}');
});

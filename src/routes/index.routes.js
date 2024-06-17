const express = require('express');
const path = require('path');
const router = express.Router(); // Use express.Router() to create a new router instance

// Ruta para la raíz
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;

const express = require('express');
const path = require('path');
const router = express.Router();

// Ruta para la raíz
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;

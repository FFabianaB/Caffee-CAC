const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');

router.get('/', (req, res) => {
    res.send('Conexion correcta desde index.routes');
})

module.exports = router
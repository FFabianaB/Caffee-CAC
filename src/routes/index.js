// src/routes/index.js

const express = require('express');
const router = express.Router();

// Importar controladores
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');

// Definir rutas
router.get('/', homeController.getIndexPage);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;

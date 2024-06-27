const express = require('express');
const router = express.Router(); 

const querystring = require('querystring'); // Para parsear los queryString

router.get('/', (req, res) => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(productos=>res.send(productos))
});
router.get('/:id', (req, res) => {
    fetch('https://fakestoreapi.com/products/' + req.params.id)
            .then(res=>res.json())
            .then(producto=>res.send(producto))
});

module.exports = router
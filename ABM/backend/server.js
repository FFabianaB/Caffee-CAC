const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const path = require("path");
const productosPath = path.join(__dirname, "./data/productos.json");
const archivoJSON = fs.readFileSync(productosPath, "utf-8");
const productos = JSON.parse(archivoJSON);

const readJSONFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) return reject(err);
            try {
                const parsedData = JSON.parse(data);
                resolve(parsedData);
            } catch (err) {
                resolve([]); 
            }
        });
    });
};

const writeJSONFile = (filePath, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
};

app.get('/productos', async (req, res) => {
    try {
        const productos = await readJSONFile('./data/productos.json');
        res.json(productos);
    } catch (err) {
        res.status(500).json({ error: 'Error leyendo el archivo de productos' });
    }
});

app.get('/productos/:id', async (req, res) => {
    try {
        const productos = await readJSONFile('./data/productos.json');
        const producto = productos.find(p => p.id === parseInt(req.params.id));
        if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json(producto);
    } catch (err) {
        res.status(500).json({ error: 'Error leyendo el archivo de Productos' });
    }
});

app.post('/productos', async (req, res) => {
    try {
       const productos = await readJSONFile('./data/productos.json');
        const newProducto = { id: Date.now(), ...req.body };
        productos.push(newProducto);
        await writeJSONFile('./data/productos.json', productos);
        res.status(201).json(newProducto);
    } catch (err) {
        res.status(500).json({ error: 'Error guardando el producto' });
    }
});

app.put('/productos/:id', async (req, res) => {
   try {
        const productos = await readJSONFile('./data/productos.json');
        const index = productos.findIndex(m => m.id === parseInt(req.params.id));
        if (index === -1) return res.status(404).json({ error: 'Producto no encontrado' });
        productos[index] = { ...productos[index], ...req.body };
       await writeJSONFile('./data/productos.json', productos);
        res.json(productos[index]);
    } catch (err) {
        res.status(500).json({ error: 'Error actualizando el producto' });
    }
});

app.delete('/productos/:id', async (req, res) => {
    try {
        const productos = await readJSONFile('./data/productos.json');
        const newProductos = productos.filter(m => m.id !== parseInt(req.params.id));
        
        await writeJSONFile('./data/productos.json', newProductos);
        
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Error eliminando el producto' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
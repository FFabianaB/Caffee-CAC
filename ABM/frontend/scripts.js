const apiUrl = 'http://localhost:3000';

document.getElementById('productosForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombreProducto').value;
    const descripcion = document.getElementById('descripProducto').value;
    const precio = document.getElementById('precioProducto').value;
    const stock = document.getElementById('stockProducto').value;
    

    fetch(`${apiUrl}/productos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, descripcion, precio, stock })
    })
    .then(response => response.json())
    .then(() => {
        document.getElementById('productosForm').reset();
        fetchProductos();
    });
});

function fetchProductos() {
    fetch(`${apiUrl}/productos`)
        .then(response => response.json())
        .then(data => {
            const productoList = document.getElementById('productosLista');
            productoList.innerHTML = '';
            data.forEach(producto => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <strong>${producto.nombre}</strong> $ ${producto.precio} - ${producto.stock}un
                    <button onclick="editProducto(${producto.id})">Editar</button>
                    <button onclick="deleteProducto(${producto.id})">Eliminar</button>
                `;
                productoList.appendChild(li);
            });
        });
}

function editProducto(id) {
    fetch(`${apiUrl}/productos/${id}`)
        .then(response => response.json())
        .then(producto => {
            const newNombre = prompt('Ingrese el nuevo nombre:', producto.nombre) || producto.nombre;
            const newDescripcion = prompt('Ingrese la nueva descripción:', producto.descripcion) || producto.descripcion;
            const newPrecio = prompt('Ingrese el nuevo precio:', producto.precio) || producto.precio;
            const newStock = prompt('Ingrese el nuevo stock:', producto.stock) || producto.stock;
            

            fetch(`${apiUrl}/productos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre: newNombre, descripcion: newDescripcion, precio: newPrecio, stock: newStock})
            })
            .then(response => response.json())
            .then(() => fetchProductos());
        });
}

function deleteProducto(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
        fetch(`${apiUrl}/productos/${id}`, {
            method: 'DELETE'
        })
        
        .then(() => fetchProductos());
    }
}

fetchProductos();

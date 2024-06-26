Proyecto Web con Node.js y Express.
Posee sección de productos, barra de búsqueda, carrito de compras, opciones de pago,
funcionalidad de login para administrador, posibilidad de agregar, borrar y editar productos subidos a una base de datos SQL
Ademas es responsive para celulares y tabletas.

![Sección de productos](https://github.com/FFabianaB/Caffee-CAC/blob/main/public/IMG/seccion-productos.jpeg?raw=true)


-------------------------------------------------------------------
proyecto/
├── node_modules/  # Dependencias de Node.js
├── src/      # Código fuente de la aplicación
│   ├── assets/      # Recursos estáticos (imágenes, CSS, etc.)
│   ├── components/  # Componentes reutilizables
│   ├── controllers/ # Controladores de las rutas
│   ├── model       
│   │   └── data/    # Archivos json
│   ├── index.js     # Punto de entrada de la aplicación
│   ├── models/      # Modelos de datos
│   └── routes/      # Rutas de la aplicación
├── public/   # Archivos estáticos para servir al cliente
│   ├── favicon.ico       
│   ├── IMG/        # Recursos estáticos (imágenes)
│   ├── styles/     # Hojas de estilo CSS
│   ├── pages/      # Secciones del sitio web
│   ├── index.html  # Página principal del sitio web
│   └── scripts/    # Archivos JavaScript del lado del cliente
└── package.json # Archivo de configuración de Node.js
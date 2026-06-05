const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, '../public')));

// Endpoint de la API
app.get('/api', (req, res) => {
    res.json({ message: "¡Hola Mundo desde el Servidor Express!" });
});

// Levantar el servidor sólo si no se está en entorno de pruebas (jest/supertest)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en: http://localhost:${PORT}`);
    });
}

module.exports = app;

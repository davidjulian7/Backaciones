const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/users', userRoutes);

// Conexión a la base de datos y arranque del servidor
sequelize.authenticate()
    .then(() => {
        console.log('Conectado a la base de datos.');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}.`);
        });
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });

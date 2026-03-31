require('dotenv').config();
const express = require('express');
const pool = require('./src/config/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

pool.connect()
    .then(() => {
        console.log('Conexión a la base de datos establecida');
    })
    .catch((err) => {
        console.error('Error al conectar a la base de datos:', err);
    });

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
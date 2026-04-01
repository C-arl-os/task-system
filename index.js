require('dotenv').config();
const express = require('express');
const pool = require('./src/config/database');
const authRoutes = require('./src/routes/auth.routes');
const taskRoutes = require('./src/routes/task.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);



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
const pool = require('../config/database');

const create = async (nombre, email, password) => {
    const result = await pool.query(
        'INSERT INTO users (nombre, email, password) VALUES ($1, $2, $3) RETURNING id, nombre, email, created_at',
        [nombre, email, password]
    );
    return result.rows[0];
}

const findByEmail = async (email) => {
    const result = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
    );
    return result.rows[0];
};


module.exports = {
    create,
    findByEmail
};  
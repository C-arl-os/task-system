const pool = require('../config/database');

const getAllTasks = async (userId) => {
    const res = await pool.query('SELECT * FROM tasks WHERE user_id = $1', [userId]);
    return res.rows;
};

const create = async (userId, title, description) => {
    const res = await pool.query(
        'INSERT INTO tasks (user_id, titulo, descripcion) VALUES ($1, $2, $3) RETURNING *',
        [userId, title, description]
    );
    return res.rows[0];
};

const update = async (taskId, title, description) => {
    const res = await pool.query(
        'UPDATE tasks SET titulo = $1, descripcion = $2 WHERE id = $3 RETURNING *',
        [title, description, taskId]
    );
    return res.rows[0];
};

const deleteById = async (taskId) => {
    await pool.query('DELETE FROM tasks WHERE id = $1', [taskId]);
};

module.exports = {
    getAllTasks,
    create,
    update,
    deleteById
};
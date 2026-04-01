
const taskService = require('../services/task.service');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks(req.user.userId);
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener tareas' });
    }
};


const createTask = async (req, res) => {
    const { titulo, descripcion } = req.body;
    try {
        const task = await taskService.createTask(req.user.userId, titulo, descripcion);
        res.status(201).json(task);
    }
    catch (err) {
        res.status(500).json({ message: 'Error al crear tarea' });
    }   
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    try {
        const task = await taskService.updateTask(id, titulo, descripcion);
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: 'Error al actualizar tarea' });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;  
    try {
        await taskService.deleteTask(id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: 'Error al eliminar tarea' });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};
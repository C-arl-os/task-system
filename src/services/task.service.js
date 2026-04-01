const taskModel = require('../models/task.model');

const getAllTasks = async (userId) => {
    const tasks = await taskModel.getAllTasks(userId);
    return tasks;
};

const createTask = async (userId, title, description) => {
    const task = await taskModel.create(userId, title, description);
    return task;
};

const updateTask = async (taskId, title, description) => {
    const task = await taskModel.update(taskId, title, description);
    return task;
};

const deleteTask = async (taskId) => {
    await taskModel.deleteById(taskId);
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};
const userService = require('../services/auth.service');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await userService.login(email, password);
        res.json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ error: error.message });
    }
};

const register = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;
        const user = await userService.register(nombre, email, password);
        res.status(201).json(user);
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    login,
    register
};
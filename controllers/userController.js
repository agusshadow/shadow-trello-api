import * as userService from '../services/userService.js';

export const register = async (req, res) => {
    try {
        const userCredentials = req.body;
        const user = await userService.register(userCredentials);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const login = async (req, res) => {
    try {
        const userCredentials = req.body;
        const user = await userService.login(userCredentials);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const logout = async (req, res) => {
    try {
        const token = req.headers.authorization;
        const result = await userService.logout(token);
        res.status(200).json({ message: result.message });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const listUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(id);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
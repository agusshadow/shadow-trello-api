import * as taskService from '../services/taskService.js'

export const createTask = async (req, res) => {
    try {
        const userId = req.user.id;
        const taskData = req.body;
        const task = await taskService.createTask(taskData, userId);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await taskService.getTaskById(id);
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getTasksByUserId = async (req, res) => {
    try {
        const userId = req.user.id;
        const task = await taskService.getTasksByUserId(userId);
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const taskData = req.body;
        const task = await taskService.updateTask(id, taskData);
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
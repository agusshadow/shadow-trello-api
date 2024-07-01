import Task from "../models/taskModel.js";

export const createTask = async (taskData, userId) => {
    try {
        const { title, description, status, board_id } = taskData;

        const task = new Task({
            title,
            description,
            status,
            board_id,
            created_by: userId
        });

        await task.save();
        return task;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};

export const getTaskById = async (id) => {
    try {
        const task = await Task.findById(id);
        return task;
    } catch (error) {
        throw new Error({ message: error.message });
    }
}

export const getTasksByUserId = async (userId) => {
    try {
        const tasks = await Task.find({created_by: userId});
        return tasks;
    } catch (error) {
        throw new Error({ message: error.message });
    }
}

export const updateTask = async (id, updatedData) => {
    try {
        const task = await Task.findByIdAndUpdate(id, updatedData, { new: true });
        return task;
    } catch (error) {
        throw new Error({ message: error.message });
    }
};
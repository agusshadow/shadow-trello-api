import User from "../models/userModel.js";

export const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error('[userService: Error al traer los usuarios]')
    }
}

export const createUser = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        return user;
    } catch (error) {
        throw new Error('[userService: Error al crear usuario]');
    }
  };
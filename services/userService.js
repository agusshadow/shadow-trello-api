import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv  from "dotenv";
import { revokedTokens } from "../middlewares/verifyAuth.js";

dotenv.config();
const jwtKey = process.env.JWT_KEY;
const salt = 10;

export const register = async (userData) => {
    try {
        const { password } = userData;

        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({...userData, password: hashedPassword});

        await user.save();

        return user;
    } catch (error) {
        throw new Error({ message: error.message });
    }
};

export const login = async (userCredentials) => {
    try {
        const { email, password } = userCredentials;

        const user = await User.findOne({email});
        if (!user) throw new Error({ message: 'No existe un usuario con ese email' });
        
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) throw new Error({ message: 'Contrasena incorrecta' });

        const token = jwt.sign({
            id: user.id,
            email: user.email  
        }, jwtKey, {expiresIn: '1h'});

        return {user_id: user.id, token};
    } catch (error) {
        throw new Error({ message: error.message });
    }   
}

export const logout = async (token) => {
    try {
        if (!token) {
            throw new Error({ message: 'No token provided' });
        }
        revokedTokens.add(token);
        return { message: 'Logout successful' };
    } catch (error) {
        throw new Error({ message: error.message });
    }
};


export const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error({ message: error.message })
    }
}

export const getUserById = async (id) => {
    try {
        const userDb = await User.findById(id);
        const { password, ...userWithoutPassword } = userDb.toObject();
        return userWithoutPassword;
    } catch (error) {
        throw new Error({ message: error.message });
    }
}
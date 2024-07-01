import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre de usuario es obligatorio'],
        unique: [true, 'El nombre de usuario ya existe'],
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: [true, 'El email ya existe'],
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'El formato del email no es valido'],
      },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: false,
    },
}, { timestamps: true })

const User = mongoose.model('User', userSchema);

export default User;
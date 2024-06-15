import mongoose from "mongoose";
import dotenv  from "dotenv";

dotenv.config();

const connectionString = process.env.MONGODB_URI;

export const connectToDb = () => {
    mongoose.connect(connectionString);
        const db = mongoose.connection;
        db.on('error', () => { console.log('Error al conectarse con MongoDB')});
        db.once('open', () => { console.log('Conexión exitosa a MongoDB')});
}
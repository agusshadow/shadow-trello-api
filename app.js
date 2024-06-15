import express from "express"; 
import { connectToDb } from "./db/dbConnection.js";
import dotenv  from "dotenv";

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());

connectToDb();

app.listen(port, () => {
    console.log(`Corriendo en: http://localhost:${port}`);
})



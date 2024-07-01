import express from "express"; 
import dotenv  from "dotenv";
import routerApi from './routes/index.js';
import { connectToDb } from "./db/dbConnection.js";
import cors from "cors"

dotenv.config();
const port = process.env.PORT;

const corsOptions = {
    origin: "http://localhost:5173"
}

const app = express();
app.use(express.json());
app.use(cors(corsOptions))
routerApi(app);

connectToDb();

app.listen(port, () => {
    console.log(`Corriendo en: http://localhost:${port}`);
})



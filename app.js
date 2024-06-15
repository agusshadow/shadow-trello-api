import express from "express"; 
import dotenv  from "dotenv";
import routerApi from './routes/index.js';
import { connectToDb } from "./db/dbConnection.js";

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());
routerApi(app);

connectToDb();

app.listen(port, () => {
    console.log(`Corriendo en: http://localhost:${port}`);
})



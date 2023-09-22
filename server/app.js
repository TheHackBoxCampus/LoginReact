import express from "express"
import cors from "cors";
import auth from "./routes/[auth].js";
import morgan from "morgan";
import rutaejemplo from "./routes/example.js";
import { fileURLToPath } from "url";
import path from "path";

const app = express(); 

/** 
 * ! middlewares
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIRECTORY = path.join(__dirname, "../dist");
app.use(express.json());
app.use(express.text());
app.use(cors());
app.use(morgan("dev"))
/**
 * ? Routes   
 */

app.use(auth)
app.use(rutaejemplo)
app.use(express.static(DIST_DIRECTORY));

export default app; 
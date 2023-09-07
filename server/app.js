import express from "express"
import cors from "cors";
import auth from "./routes/[auth].js";
import morgan from "morgan";

const app = express(); 

/** 
 * ! middlewares
 */

app.use(express.json());
app.use(express.text());
app.use(cors());
app.use(morgan("dev"))
/**
 * ? Routes   
 */

app.use(auth)

export default app; 
import express from "express"
import cors from "cors";
import auth from "./routes/[auth].js";

const app = express(); 

/** 
 * ! middlewares
 */

app.use(express.json());
app.use(express.text());
app.use(cors());

/**
 * ? Routes   
 */

app.use(auth)

export default app; 
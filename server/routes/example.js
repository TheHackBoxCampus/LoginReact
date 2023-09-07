import { Router } from "express";

const rutaejemplo = Router(); 

rutaejemplo.get("/ejemplo", (req, res) => res.send("hello world!"))

export default rutaejemplo;
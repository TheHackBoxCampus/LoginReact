import { Router } from "express";

/**
 * ? versions
 */


const auth = Router(); 

auth.get("/login", (req, res) => res.send("login!!!") )

export default auth
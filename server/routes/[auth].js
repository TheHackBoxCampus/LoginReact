import { Router } from "express";
import { loginLimit } from "../limit/login.limit.js";
import { dtoInstancesForLogin } from "../storage/[DTO].login.js";
import { validateLogin } from "../middleware/login.md.js";
import { login } from "../controllers/v1/auth.controller.js";
/**
 * ? versions
 */

const auth = Router(); 

auth.get("/login", loginLimit, dtoInstancesForLogin, validateLogin, login)

export default auth
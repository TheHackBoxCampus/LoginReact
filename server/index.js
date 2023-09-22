import { loadEnv } from "vite";
import app from "./app.js";

const start = () => {
    try {
        const env = loadEnv("development", process.cwd(), "VITE")
        let config = {
            hostname: env.VITE_HOSTNAME,
            port: env.VITE_BACKEND
        }
        app.listen(config, () => {
            console.log(`http://${config.hostname}:${config.port}`);
        }) 
    }catch(err) {
        console.log(err)
    }
}   

// ejecutar
start(); 
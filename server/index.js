import app from "./app.js";
import dotenv from "dotenv"

dotenv.config("../")

const start = () => {
    try {
        let server = JSON.parse(process.env.SERVER);
        app.listen(server, () => {
            console.log(`http://${server.hostname}:${server.port}`);
        }) 
    }catch(err) {
        console.log(err)
    }
}   

// ejecutar
start(); 
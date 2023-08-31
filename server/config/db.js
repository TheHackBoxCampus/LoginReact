import { MongoClient } from "mongodb"
import dotenv from "dotenv"

// credentials
dotenv.config("../../")

const conexion = async () => {
    try {
        let credentials = JSON.parse(process.env.USER_DB)
        let uri = `mongodb+srv://${credentials.username}:${credentials.password}@cluster0.n6bcmtk.mongodb.net/${credentials.database}`
        let options = {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        };
        let client = await MongoClient.connect(uri, options); 
        console.log("db => success")
        return client.db(); 
    }catch(err) {
        console.log(err)
    }
}

export {
    conexion
}
import {conexion} from "../../config/db.js";

const verifyAuth = async (id) => {
    try {

    }catch(err) {
        console.lof(res)
    }
}


const login = async (req, res) => {
    try {
        let {email, password} = req.body; 
        let db = await conexion(); 
        let users = await db.collection("user"); 
        let userIsMatch = await users.find({email, password}).toArray(); 
        if(userIsMatch.length < 1) return res.status(404).send({status: 404, message: "Credenciales incorrectas!"})
        else {
        let permissions = verifyAuth(userIsMatch.id_user); 
            
        return res.status(200).send({status: 200, redirectUrl: "Redireccion exitosa!!", success: true});  
      }
    }catch(err) {
        res.sendStatus(500);
        console.log(err); 
    }
}

export {    
    login
}
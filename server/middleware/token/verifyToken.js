import passport from "../../passport/setting.bearer.js"

const validateToken = (req, res, next) => {
    passport.authenticate("bearer", {session: false}, (err, decoded) => {
        if(!decoded) return res.status(401).send({status: 401, message: "Autenticacion fallida!"})
        else {
            let method = req.method; 
            console.log(method)
            return next(); 
        }
    })(req, res, next)
}

export {
    validateToken
}
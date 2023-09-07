import passport from "passport";
import { Strategy as bearer } from "passport-http-bearer";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config("../../")

passport.use(new bearer(
    function(token, done) {
        jwt.verify(token, process.env.KEY, {algorithms: "HS256"}, (err, decoded) => {
            err ? done(err) : done(false, decoded, {scope: "*"})
        })
    }
))

export default passport
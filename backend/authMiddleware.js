const {secretKey} = require("./db")
const jwt = require("jsonwebtoken")

async function authMiddleware(req, res, next){
    let token = req.headers.authorization
    try{
        jwt.verify(token, secretKey)
        next()
    }
    catch(e){
        console.log("jwt not provided");

    }
}

module.exports = {
    authMiddleware
}
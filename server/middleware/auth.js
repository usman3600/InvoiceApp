const jwt = require("jsonwebtoken")
const verifyToken = async (reg, res, next) => {
    try{
        let token = reg.header("Authorization")
        if (!token){
            res.status(403).send("Access denied")
        }
        if (token.startwith("Bearer ")){
            token = token.slice(7, token.length).trimleft()
        }
        const verified = jwt.verify(token,  process.env.JWT_SECRET)
        req.user = verified
        next()
    }
    catch(error){
        res.status(500).send({message:error})
    }
}

module.exports = verifyToken
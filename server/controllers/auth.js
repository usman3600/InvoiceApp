const jwt  = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Admin = require("../db/models/admin")
const Admin = require("../db/models/admin")

/* creating a new admin in the database */
const SignUp = async (reg, res) => {
    try{
        const {
            firstname,
            lastname,
            email,
            password,
            picturepath
        } = req.body
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt)

        const Admin = new Admin({
            firstname,
            lastname,
            email,
            password:hashPassword,
            picturepath
        })
        const regisAdmin  = await Admin.save()
        res.status(201).send(regisAdmin)
    }
    catch(error){
        res.status(500).send({message:error})
    }
}

/* logging and authenticating the admin */

const SignIn = async (reg, res) => {
    try{
        const {email, password} = reg.body
        const admin = Admin.findOne({email:email})
        if (!admin){
            res.status(400).json({message:"user does not exist"})
        }
        const comparePassword = await bcrypt.compare(password, admin.password)
        if (!comparePassword){
            res.status(400).json({message:"password provided doesnot match any one!"})
        }
        const token = jwt.sign({id:admin._id}, process.env.JWT_SECRET)
        delete admin.password
        res.status(200).json({token, admin})

        } 
    catch(error){
        res.status(500).json({message:error})
    } 
}
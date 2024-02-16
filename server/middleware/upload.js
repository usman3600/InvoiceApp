require("dotenv").config()
const multer = require("multer")
const util = require("util")
const path = require("path")


const storage = multer.diskStorage({
    destination: (reg, file, cb) =>{
        cb(null, "./db/files/images")
    },
    filename: (reg, file, cb) =>{
        console.log("regwues--->", reg.params.filename)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
var uploadFilesMiddleware = util.promisify(multer({storage:storage}).single("file"))
module.exports = uploadFilesMiddleware;
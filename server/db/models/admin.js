const mongoose = require("mongoose")
const adminSchema =  mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        request:true,
        unique:true
    },
    password:{
        type:String,
        request:true,
    },
    picturepath:{
        type:String,
        default: ""
    },
    /*createdAt:{
        default:Date.now,
    }*/
})
 
const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
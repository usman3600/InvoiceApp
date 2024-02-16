const mongoose = require("mongoose")
const clientSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        
    },
    /*invoices:{
        type: Array,
        default:[]
    },*/
    mobile:{
        type: String,
        require: true,
    },
    /*profileImage:{
        type:String,
        default: ""
    },*/
   /* createdAt:{
        default:Date.now,
    }*/
})

const adminSchema =  mongoose.Schema({
    name:{
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
    profileImage:{
        type:String,
        default: ""
    },
    /*createdAt:{
        default:Date.now,
    }*/
})
 
module.exports = mongoose.model("clients", clientSchema);
//module.exports = mongoose.model("admin", adminSchema);
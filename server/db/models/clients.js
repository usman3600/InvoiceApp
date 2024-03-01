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
const Client = mongoose.model("Clients", clientSchema);
module.exports = Client;
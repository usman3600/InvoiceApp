require("dotenv").config({path:"./config/.env"})
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose")
const connectionUrl = process.env.DB_URL;
const database = process.env.DB_NAME
const mongoClient = new MongoClient(connectionUrl);

const Connection = async() =>{
    try{
        /*mongoClient.connect()
        mongoClient.on('error', (error)=>{
            console.log(error)
        })
        mongoClient.once("connected", ()=>{
            console.log("database successfully connected")
        })*/
        mongoose.connect(connectionUrl+database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
        mongoose.once
    }catch(err){
        console.log(err);
    }
    return ;
}
module.exports = Connection;
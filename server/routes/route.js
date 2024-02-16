require("dotenv").config
const express = require("express")
const MongoClient = require("mongodb").MongoClient
const Client = require("../db/model")
const upload = require("../middleware/upload")
const router = express.Router()
const GetImage = require("../controllers/upload")
const stripePayment = require("../middleware/stripepayment")
router.get("/clients", async(reg,  res)=>{
    try{
        const clients = await Client.find()
        res.status(200).json(clients)

    }catch(error){
        res.status(500).json({message: error.message})
    }
})
router.get("/client/:id", async(reg,  res)=>{
    try{
        const client = await Client.findById(reg.params.id)
        res.status(200).json(client)
    }catch(error){
        res.status(404).json({message:error})
    }
})
router.post("/client", async(reg,  res)=>{
    try{
        const client = await Client.create({
            name:reg.body.name,
            email:reg.body.email,
            mobile:reg.body.mobileNumber
        });
        //const saveClient = await client.save()
        res.status(200).json(client)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})
router.patch("/client/:id", async(reg,  res)=>{
    const id = reg.params.id
    const updateData = reg.body
    const options = {new:true}
    try{
        const updatedClient = await model.findByIdAndUpdate(
            id, updateData, options
        )
        res.status(200).json(updatedClient)
    }catch(error){
        res.status(400).json({ message: error.message })
    }
})
router.delete("/client/:id", async(reg,  res)=>{
    const id =  reg.params.id
    try{
        const client = await model.findByIdAndDelete(id)
        res.status(200).send(`client  ${client.name} deleted`)
    }catch(error){
        res.status(400).json({message:error.message})
    }

})

router.post("/upload", upload, (reg, res)=>{
    res.status(200).send("upload")
})
router.get("/file/:filename", GetImage)
router.post("/payment-intent", stripePayment)
//router.get("/file/:name", uploadController.download)
module.exports = router
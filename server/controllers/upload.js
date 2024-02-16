const fs = require("fs")
const path = require("path")

const GetImage = (reg, res) =>{
  const fileName = reg.params.filename
  const filePath = path.join(__dirname, "../db/files/images", fileName)
  console.log("filePath", filePath)
  fs.existsSync(filePath,  (exists)=>{
    if (exists){
      res.status(200).sendFile(filePath)
    }
    else{
      res.status(404).send("File Not Found")
    }
  })
}

module.exports = GetImage
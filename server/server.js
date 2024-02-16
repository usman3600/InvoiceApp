require("dotenv").config({path:"./config/.env"});
const express = require("express");
const cors = require("cors");
const morgan = require("morgan")
const Connection = require("./db/connect");
const route = require("./routes/route")
const app = express();
const port = process.env.PORT || 5000;

Connection()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"))
app.use((reg, res, next)=>{
  console.log(reg.url)
  next()
})
app.use("/api", route)
app.listen(port, ()=>{
    console.log(`server current running at http://localhost:${port}`)
});
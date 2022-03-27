const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT||2000;
const Students = require('./contentSchema')
mongoose.connect("mongodb+srv://Bhanu:bhanu1803@cluster0.e5xfu.mongodb.net/bhanudb")

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(bodyParser.json())

app.use(cors())

app.get("/getStudents",(req,res)=>{
    Students.find()
    .then(result=>res.json(result))
})

app.post("/addStudents",(req,res)=>{
    //console.log(req.body)
    const {name,age,address}=req.body;
    const newStudent =new Students({
        name,age,address
    })
    newStudent.save(); 
    res.send("data added sucessfully")
})

app.get("/",(req,res)=>{
    res.send("Working")
})
app.listen(port,()=>`port is running ${port}`)
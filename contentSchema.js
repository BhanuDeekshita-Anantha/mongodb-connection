const mongoose = require ("mongoose")

const student={
    name:String,
    age:Number,
    address:String
}
const Students=mongoose.model("Students",student)

module.exports=Students
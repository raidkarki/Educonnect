import mongoose from "mongoose"


const groupschema=mongoose.Schema({

    name:String,
    number:Number,
    section:Number


    
})
const Group=mongoose.model("group",groupschema)

export default Group
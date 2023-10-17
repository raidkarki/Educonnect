import mongoose from "mongoose"

const student = new mongoose.Schema({
     _id: Number ,
    name: {
        type: String,
        required: true
    },
    secondname: {
        type: String,
        required: true
    },
    class:{
        type:String,
        required:true
    },
    group:{
        type:Number,
        required:true
    },

    section:{
        type:Number,
        required:true
    },
    
    
    
    email: String,
    
    year: Number,
   
})

const Student = mongoose.model("Student", student)

export default Student
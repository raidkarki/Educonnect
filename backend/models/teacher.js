import mongoose from "mongoose"

const teacher = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    secondname: {
        type: String,
        required: true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
        
    },	
    
    Grade: String,
    subjects: [String],


})

const Teacher = mongoose.model("Teacher", teacher)

export default Teacher
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
    groups:[{
        type: mongoose.Schema.Types.ObjectId,
    ref: 'group', // Reference to the classroom or group document


    }],
    Grade: String,
    subjects: [String],
    setgroup:Boolean


})

const Teacher = mongoose.model("Teacher", teacher)

export default Teacher
import mongoose from "mongoose";


const subject = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type:[String],

   

})

const Subject = mongoose.model("subject", subject)

export default Subject


import mongoose from "mongoose"



// Define a schema for the attendance event
const attendanceSchema = new mongoose.Schema({
    //exemple 
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group', // Reference to the classroom or group document
    required: true
  },
  teacher:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Teachers',
    required:true

  },
  Subject:{
    id:{type:mongoose.Schema.Types.ObjectId,
    ref:'Subject',
    required:true},
    type:String
     
    
    


  },

  date: {
    type: Date,
    required: true
  },
  attendedStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'students' // References to student documents who attended
  }],
  absentedStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'students' // References to student documents who were absent
  }]
  // Other attendance event information fields
});

// Create a model for the attendance schema
const Session = mongoose.model('Attendance', attendanceSchema);

export default  Session;

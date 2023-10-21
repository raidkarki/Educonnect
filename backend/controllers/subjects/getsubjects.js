import Subject from "../../models/subject.js";

//hadi lfonction li tjib les modules kaml

export const getsubjects=async (req,res)=>{
   
    
    try {
        const subjects=await Subject.find().sort({name:"asc"});
        res.status(200).json({subjects})
    } catch (error)  {
        res.status(404).json({message:error.message})
        
    }

}
import mongoose from "mongoose"
import Teacher from "../../models/teacher.js"

const updateteacher=async (req,res)=>{
     const {id,groupids}=req.body
    console.log(id,groupids)
    try {
        const teacher=await Teacher.findOne({_id:id})
        if(!teacher) return res.status(404).json({message:"teacher not found"})
        teacher.groups=groupids
        teacher.setgroup=true
        await teacher.save()
        res.status(200).json({message:"teacher updated"})
        
    } catch (error) {
        res.status(404).json({message:error.message})
        
    }

}
export default updateteacher
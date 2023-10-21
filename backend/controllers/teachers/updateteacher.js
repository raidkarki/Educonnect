
import Teacher from "../../models/teacher.js"

//hadi lfonction ta3 les groups li zadhm teacher
export const updateteacher=async (req,res)=>{
     const {id,groupids}=req.body
    console.log(groupids)
    try {
        const teacher=await Teacher.findOne({_id:id})
        if(!teacher) return res.status(404).json({message:"teacher not found"})
        
        
        const uniqueGroups = new Set(teacher.groups.map(String));

        // Add the new group IDs to the Set
        groupids.forEach((group) => uniqueGroups.add(group.toString()));
        console.log("Unique groups:", uniqueGroups);
        // Convert the Set back to an array of ObjectId instances
        const updatedGroups = Array.from(uniqueGroups);
        
        console.log("Updated groups:", updatedGroups);
        
        // Assign the updated groups to teacher.groups
        teacher.groups = updatedGroups;
        teacher.setgroup=true
        await teacher.save()
        res.status(200).json({message:"Groups updated"})
        
    } catch (error) {
        res.status(404).json({message:error.message})
        
    }

}
//hadi lfonction ta3 les subjects li zadhm teacher
export const addsubjects=async (req,res)=>{
    const {id,subjectsisd}=req.body
    console.log(subjectsisd)
    try {
        const teacher=await Teacher.findOne({_id:id})
        if(!teacher) return res.status(404).json({message:"teacher not found"})
        
        
        const uniqueSubjects = new Set(teacher.subjects.map(String));

        // Add the new group IDs to the Set
        subjectsisd.forEach((subject) => uniqueSubjects.add(subject.toString()));
        console.log("Unique subjects:", uniqueSubjects);
        // Convert the Set back to an array of ObjectId instances
        const updatedSubjects = Array.from(uniqueSubjects);
        
        console.log("Updated subjects:", updatedSubjects);
        
        // Assign the updated groups to teacher.groups
        teacher.subjects = updatedSubjects;
        
        await teacher.save()
        res.status(200).json({message:"Subjects updated"})
        
    } catch (error) {
        
    }

}

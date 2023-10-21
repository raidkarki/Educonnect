import Student from "../../models/student.js";
import Teacher from "../../models/teacher.js";
import Subject from "../../models/subject.js";

//hadi lfonction li katjib lstudents li f 
//group w zid lha lsubjects li 
//kayn f teacher
export const getStudents = async (req, res) => {

    const { groupid,id } = req.query
    try {
        const {subjects}= await Teacher.findOne({_id:id})  
        const subjects1=  await Subject.find({_id:{$in:subjects}})
        const students =  await Student.find({groupId:groupid})
        res.status(200).json({students,subjects1}) 
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
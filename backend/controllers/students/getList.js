import Student from "../../models/student.js";
import mongoose from "mongoose";

export const getStudents = async (req, res) => {
    const { groupid } = req.query
    console.log(groupid);
    try {
        const students = await Student.find({groupId:groupid})

        res.status(200).json(students) 
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
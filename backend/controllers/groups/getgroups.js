

import Group from "../../models/group.js"
import Teacher from "../../models/teacher.js"


export const getGroups = async (req, res) => {
    const {id}=req.query
    console.log(id)
    try {

        const {groups} =await Teacher.findOne({_id:id})

        const groups1 = await Group.find({ _id: {$in:groups} }).sort({name:"asc"});
        res.status(200).json({groups:groups1});

        
        


        
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
    }
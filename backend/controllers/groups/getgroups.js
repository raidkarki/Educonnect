import mongoose from "mongoose"

import Group from "../../models/group.js"


export const getGroups = async (req, res) => {
    
    try {
        const groups = await Group.find({})

        res.status(200).json(groups)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
    }


import  Group  from '../../models/group.js';

export const getGroup = async (req, res) => {


    
    const year = req.body.year;
    console.log(year);
    try {
        if (year==="LMD3") {
            const groups1 = await Group.find({ name: {$in:["SI","ISIL"]} }).sort({name:"asc"});
            res.status(200).json({groups:groups1,branches:[{"nameB":"ISIL"},{"nameB":"SI"}]});
        } else{
            const groups = await Group.find({ name: year }).sort({section:1,number:1});
        res.status(200).json({groups:groups});
    }
        



        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}
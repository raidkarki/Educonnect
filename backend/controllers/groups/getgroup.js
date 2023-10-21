

import  Group  from '../../models/group.js';
//hadi lfonction bah mouhamed yrateb biha l affichage ta3 les groupes w les branches
//w fiha b3d nb3tlou les group ta3 lmd1 lmd2
export const getGroup = async (req, res) => {


    
    const year = req.body.year; 
    console.log(year);
    try {
        if (year==="M1") {
           // const groups1 = await Group.find({ name: {$in:["STIC1","SIQ1"]} }).sort({name:"asc"});
            res.status(200).json({branches:[{"nameB":"STIC"},{"nameB":"SIQ"}]});
            
        }
        else
        if (year==="M2") {
            //const groups1 = await Group.find({ name: {$in:["STIC2","SIQ2"]} }).sort({name:"asc"});
            res.status(200).json({branches:[{"nameB":"STIC"},{"nameB":"SIQ"}]});
            
        }
        else
        if (year==="LMD3") {
            //const groups1 = await Group.find({ name: {$in:["SI","ISIL"]} }).sort({name:"asc"});
            res.status(200).json({branches:[{"nameB":"ISIL"},{"nameB":"SI"}]});
        } else{
            const groups = await Group.find({ name: year }).sort({section:1,number:1});
            res.status(200).json({groups:groups});
    }
        



        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}
//hadi lfonction li tjib les group ta3 lisil wel si wel stic wel siq 
export const getGroupByBranch = async (req, res) => {

    const branch = req.body.branch;
    console.log(branch);

    try {
       
            const groups = await Group.find({ name: branch }).sort({section:1,number:1});
            res.status(200).json({groups});
        
        
    } catch (error) {

        res.status(404).json({ message: error.message });

        
    }

}
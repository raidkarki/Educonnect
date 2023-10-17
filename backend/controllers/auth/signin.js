



import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Teacher from '../../models/teacher.js';

const saltRounds = 10;

const login = async (req, res) => {
    
    
    const { email, password } =req.body;
    console.log(email,password);

    try {
        const existingUser=await Teacher.findOne({email})
        if(!existingUser) return res.status(404).json({message:"user doesn't exist"})
        const ispasswordcorrect=await bcrypt.compare(password,existingUser.password)
        if(!ispasswordcorrect) return res.status(400).json({message:"invalid credentials"})
        const token=await jwt.sign({email:existingUser.email,id:existingUser._id},"oneyear",{expiresIn:"356d"})
        res.status(200).json({fname:existingUser.name,lname:existingUser.secondname,email,token:existingUser._id})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export default login

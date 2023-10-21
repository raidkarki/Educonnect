
import Teacher from "../../models/teacher.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

const hashpasswords = async () => {
    try { 
            const hashedteachers = await Promise.all(
                teachers.map(async (teacher) => {
            const hashedpassword = await bcrypt.hash(teacher.password, saltRounds)
            return { ...teacher, password: hashedpassword }
        }))
        return hashedteachers
    } catch (error) {
        console.log(error.message)
    }
}

const uploadteachers = async (req, res) => {
    try {
        const hashedteachers= await hashpasswords()
        await Teacher.insertMany(hashedteachers)
        res.status(201).json({ message: "teachers uploaded" })
    } catch (error) {
        res.status(409).json({ message: error.message }) 
    }
}
export default uploadteachers
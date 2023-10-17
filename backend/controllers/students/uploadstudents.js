import fs from 'fs'
import transform from "../../utils/transform.js"
import Student from '../../models/student.js';

const uploadstudents = async (req, res) => {
    const directoryPath = './data';
    fs.readdir(directoryPath,async function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        files.forEach(async function (file) {
             
            const data = transform("./data/"+file)
            await Student.insertMany(data)
            .then(()=>console.log(`class ${file.split(".")[0]} uploaded`))
            .catch((error)=>console.log(error.message+`IN ${file}` ))
    });
})}

export default uploadstudents
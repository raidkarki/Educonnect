import fs from 'fs'
import transform from "../../utils/transform.js"
import Student from '../../models/student.js';
//hadi lfonction li tala3t biha les students l database bel fonction ta3 transform
const uploadstudents =  () => {
    const directoryPath = './data';
    fs.readdir(directoryPath, function (err, files) {
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
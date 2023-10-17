import xlsx from 'xlsx';

//i want to convert xlsx to json

const transform = (file) => {
    // readfile is a function that takes a file path and returns a workbook object
    // sheetnames is a property of workbook object that returns an array of strings
    const workbook = xlsx.readFile(file);
    const sheet_name_list = workbook.SheetNames;
    

    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

    data.forEach(element => {
        element._id=+element.Matricule;
        element.name=element?.name?.split("/")[0]
        element.secondname=element?.secondname?.split("/")[0];
        element.class=sheet_name_list[0].split(" ")[0];
        element.section=Number(sheet_name_list[0].split(" ")[1]);
        element.group=Number(sheet_name_list[0].split(" ")[2]);
    });
    
    return data;
}

export default transform;
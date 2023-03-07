const read=require('xlsx')
const readxls=(Excel_path)=>{
    console.log("reading File")
    let data = []
    const file = read.readFile(Excel_path)

    const sheets = file.SheetNames
    for (let i = 0; i < sheets.length; i++) {
        const temp = read.utils.sheet_to_json(
            file.Sheets[file.SheetNames[i]])
            var count=0;
        temp.forEach((res) => {
            data.push(res)
            console.log(res);
            console.log(count);
            count++;
        })
    }
    return data;
}
 module.exports ={
    readxls
 }
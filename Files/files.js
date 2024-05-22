const fs = require('fs')
const path = require('path')
const dirPath =path.join(__dirname)


// for(i=0;i<5;i++)
//     {
// fs.writeFileSync(dirPath+`/file${i}.txt`,'a simple txt file')

//     }

fs.readdir(dirPath,(err,files)=>
{

  files.forEach((item)=>{
    console.log(`file names are ${item}`);
  })
  
})
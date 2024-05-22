// const fs = require('fs')
// const path = require('path')

// const dirPath = path.join(__dirname,'crud')
// const filepath=`${dirPath} /apple.txt`

// fs.writeFileSync(filepath,'this is a simple txt file')



const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'crud');
const filePath = path.join(dirPath, 'apple.txt');

fs.writeFileSync(filePath, 'This is a simple txt file.');


// fs.readFile(filePath,'utf-8',(err,item)=>{
//     console.log(item);
// })

fs.appendFile(filePath,'and file name is apple.txt',(err)=>{

    if(!err) {
        console.log("file is updated ");
    }
})
// else (data.includes(filePath)) 
//     console.log("Content already exists in the file. Skipping append.");
//     return;
// })

fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
    if(!err) {
        console.log("file is updated ");
    }
})

//and if want to delete the file i need to use fs.unlinksync(the file dir.)



// What is buffer

//it is a temporary memory location (when we perform any operation on file system node js need some memory system )

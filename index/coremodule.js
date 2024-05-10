const FileSystem=require('fs')

console.log("hello everyone")

FileSystem.writeFileSync("hello.txt","code for node js")

//file system is non global because we have create a variable(with the  same file name like i used filesystem) to execute the code
//then it will create a new file as whatever u want (in this i have created a text file )--
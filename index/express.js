const express = require('express')
const app = express()

app.get('',(req,resp)=>{
    console.log("data send by browser",req.query.name);
resp.send('welocome this is home page ')
})

app.get('/about',(req,resp)=>{
    resp.send('Hello this is about  page ')
    })

    app.listen(4500)// without making server this code will not run so we have to make a port 

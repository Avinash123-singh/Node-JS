//make a basic server and make its output on browser

const http=require('http')

const dataControl= (req,resp)=>{
    resp.write("<h1>hello everyone this is avinash singh</h1>")
    resp.end()
}
http.createServer(dataControl).listen(4000)


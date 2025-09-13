const http = require("http");
const fs = require("fs");

const PORT = 4000;

const server = http.createServer((req,res)=>{
    const date = new Date();
    const log = `${date.toLocaleString()} : & from ${req.url} New Request received\n`;
    // const filename = "./01_NodeJS/http/log.txt";
    fs.appendFile("log.txt",log,(err)=>{
        if(err){
            console.log(err);
            res.statusCode=500;
            res.end("Internal server error")
            return;
        }
        res.end("Hello server ")
    })
})


server.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
    
})



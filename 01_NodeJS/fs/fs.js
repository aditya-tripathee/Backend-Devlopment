const fs = require("fs");

// crud operations 
// synchronous way :-- blocking code

// write 
// fs.writeFileSync("./01_NodeJS/fs/text.tx","Hello File System in Node js")
// // read
// const result = fs.readFileSync("./01_NodeJS/fs/text.tx","utf-8")
// console.log(result);

// update
// fs.appendFileSync("./01_NodeJS/fs/text.tx","\nThis is the updated file of synchronous");

// delete
fs.unlinkSync("./01_NodeJS/fs/bio.txt");

// rename
// fs.renameSync("./01_NodeJS/fs/bio.com","./01_NodeJS/fs/bio.txt");



// asynchronous method :-- non blocking code 

// write 
// fs.writeFile("./01_NodeJS/fs/mybio.txt","This is the asynchronous file system",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File has been created!");
        
//     }
// })


// // read:--
// fs.readFile("./01_NodeJS/fs/mybio.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

// update 
// fs.appendFile("./01_NodeJS/fs/mybio.txt","\nThis is the updated file",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File has been updated!");     
//     }
// })

// rename file :--
// fs.rename("./01_NodeJS/fs/adiiBio.txt","./01_NodeJS/fs/mybio.txt",(err)=>{
//     if(err){
//         console.log(err);
        

//     }
//     else{
//         console.log("File name has been updated!");
        
//     }
// })


// delete
fs.unlink("./01_NodeJS/fs/mybio.txt",(err)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log("File has been deleted!");
        
    }
})


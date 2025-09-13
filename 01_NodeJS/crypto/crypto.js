const crypto = require("crypto");

let start = Date.now();


// crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{
//     console.log(`${Date.now() -start}ms Done`);
    

// })

const hmac = crypto.createHmac("sha256", "mySecretKey")
                  .update("Hello World")
                  .digest("hex");
console.log(hmac);



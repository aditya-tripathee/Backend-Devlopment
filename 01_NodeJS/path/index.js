const path = require("path");

// 1. __filename :-- provides the absolute path of the currently executing file 
console.log("FILENAME" , __filename);

// 2. __dirname :-- provides the absolute path of currently directory file 
console.log("DIRNAME", __dirname);

// School management system 
// folders\students\data.txt
// path.join():-- joins multiple segements into one, using the appopriate separators
const filepath = path.join("college","students","CSE","data.txt");

// path.resolve():-- resolve the 
const resolvePath = path.resolve(filepath);


// path.extname:-
const extanme = path.extname(filepath);

// path.basename:== 
const basename = path.basename(filepath);

// path.dirname:--
const dirname = path.dirname(filepath);

// path.parse 
const parseData = path.parse(filepath);



console.log({parseData,filepath,extanme,basename,dirname,resolvePath})



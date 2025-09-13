const EventEmitter = require("events")

const emitter = new EventEmitter();

// // on :-- events create 
// emitter.on("greet",()=>{
//     console.log(`Hello dosto kaise ho aap`);
    
// })
// // emit :-- execute

// emitter.emit("greet");



// // name events 

// emitter.on("aditya",(name,department)=>{
//     console.log(`Hello ${name} and works as ${department}`);
    
// })


// emitter.emit("aditya","adii","SDE");




// tasks 

const userEmitter = new EventEmitter();

let eventsCount = {
    LOGIN : 0,
    LOGOUT : 0,
    PURCAHSE:0,
    PROFILE_UPDATE:0
}




userEmitter.on("LOGIN",(username)=>{
    eventsCount.LOGIN++;
    console.log(`${username} Logged In successfully!`);
    SU
    
})

userEmitter.on("LOGOUT",(username)=>{
    eventsCount.LOGOUT++;
    console.log(`${username} Logout successfully!`);
    
})

userEmitter.on("PURCHASE",(username,item)=>{
    eventsCount.PURCAHSE++;
    console.log(`${username} purchase ${item}`);
})


userEmitter.on("PROFILE_UPDATE",(username,field)=>{
    eventsCount.PROFILE_UPDATE++;
    console.log(`${username} updated their profile fields: ${field}`);
})


userEmitter.on("SUMARRY",()=>{
    console.log(`\nEvents Summary:`);
    console.log(`Logins : ${eventsCount.LOGIN}`);
    console.log(`Logout: ${eventsCount.LOGOUT}`);
    console.log(`Purchase: ${eventsCount.PURCAHSE}`);
    console.log(`Profile_Updates: ${eventsCount.PROFILE_UPDATE}`);
    
})



userEmitter.emit("LOGIN","ADITYA TRIPATHI");
userEmitter.emit("LOGOUT","Aditya Tripathi");
userEmitter.emit("PURCHASE","Aditya","Motorola G85");
userEmitter.emit("PROFILE_UPDATE","Aditya","Email Address")
console.log(eventsCount);
userEmitter.emit("SUMMARY");


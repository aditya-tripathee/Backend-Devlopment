// Global objects in nodejs

// Global objects in node.js are always available and do not need to be imported. They include objects like console,global, setTimeOut, setInterval etc;

// console.log(global);
// console.log(Object.global);


// settimeout :-
setTimeout(()=>{
    console.log("Hello i am global");
    
},2000)
console.log("setTimeout end ");


// setInterval :--

let count = 0;

const interval = setInterval(()=>{
    console.log(`Interval count : ${++count}`);
    if(count==20){
        clearInterval(interval);
    }
},2000)



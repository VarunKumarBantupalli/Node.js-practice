const fs = require("fs")

console.log('start ->');

fs.writeFile("hary.txt","hari is a good boy", ()=>{
    console.log('done');
    
fs.readFile("hary.txt",(error , data)=>{
    console.log(error,data.toString())   
})
})

fs.appendFile("hary.txt" , "harryrobo" , (e,d) => {
    console.log(d);
    
})


console.log('end');


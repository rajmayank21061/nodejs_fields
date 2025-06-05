const { log } = require("console");
const fs = require("fs");

//synchrounus
//fs.writeFile("./test.txt","hello baby!")

//Async
//fs.writeFile("./test.txt","hello baby Async..",(err) => {} );

//Sync.. : return 
// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result);

 //Async.. : not return
fs.readFile("./contacts.txt","utf-8",(err , result) => {
    if(err){
        console.log("Error ", err);
    } else {
        console.log(result);
    }
})

fs.appendFileSync("./test.txt", `${Date.now()} Hey There \n`)

fs.cpSync('./test.txt','./copyTest.txt');

fs.mkdirSync("./newFoldedr/a/b/c",{recursive: true});//make folder
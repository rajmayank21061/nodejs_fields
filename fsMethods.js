const fs = require('fs');
const http = require('http');

//Read Files Method

http.createServer(function(req,res){
    fs.readFile('index.html',function(err,data){
        if(err) throw err;
        res.writeHead(200,{'content-type': 'text/html'});
        res.write("data printed.");
        res.end();
    });
}).listen(8000,() => console.log("server is running!")
);


//Create Files Methods

fs.appendFile('test.txt','This is appended text.',function(err){
    if(err) throw err;
    console.log('updated!'); 
})

//The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing
//for 4 parameters : fs.open( filename, flags, mode, callback )
//for 3 parameters : fs.open ( filename, flags, callback)
fs.writeFile('./index.txt',"This a new text by writeFile.",function(err){
    if(err){
     //throw err;
     console.error('An error Occured!',err.message);
     return;
    }
    console.log('Replaced!');
})

fs.open('myNew.txt','a',function(err,fd){
    if(err) throw err;
    console.log('File descriptor:', fd);
    console.log('Flag value:', fs.constants.O_WRONLY);
    //a : data to append
    const data = " This is appended by a flag \n";
    fs.write(fd,data,(err) => {
        if(err) throw err;
        console.log('Data appended to the file');
        //Close the descriptor
        fs.close( fd , (err) => {
            if(err) throw err;
            console.log('file closed.');
        })
    })  
})

//Delete Files

// fs.unlink('myNew.txt',function(err){
//     if(err) throw err;
//     console.log('File Deleted!');
    
// })

//Rename Files

// fs.rename('index.txt','indexRenamed.txt',function(err){
//     if(err) throw err;
//     console.log('FIle renamed!');
// })
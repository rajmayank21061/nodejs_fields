//concept 1
// const math = require("./math");
// console.log("hello baby!");
// console.log("Math value is : ", math.addFn(2,7));
// console.log(math);


//concept 2

// var http = require('http');
// var date = require('./myfirstmodule');

// //A server object
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + date.myDateTime());
//   res.end();
// }).listen(8081);


//concept 3

const  http = require('http');
const url = require('url');

http.createServer( function(req,res) {
    res.writeHead( 200, {'Content-Type' : 'text/html'});
    const q = url.parse(req.url,true).query;
    const text = q.year + " " + q.month;
    res.end(text);
}).listen(8082);

//http://localhost:8080/?year=2017&month=July 


//concept 4

const fs = require('fs');
const writable = fs.createWriteStream('index.txt');
//write in index.txt 
writable.write("Hello Baby! , What's going on ");
writable.write("it might be response.");
writable.end(); //Signal: when we stop the writing

http.createServer( function(req,res) {
    fs.readFile('./index.html', (err,data) => {
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            res.write("404 Not Found");
            res.end();
        }else{
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            res.end();
        }
    })
}).listen(8083,() => console.log("Server is successfully running !"))

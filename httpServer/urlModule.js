const { log } = require('console');
const url = require('url');
const http = require('http');
const fs = require('fs');

const add = 'http://localhost:8000/about?name=bablu&dob=09/10/2003';

const q = url.parse(add,true);

console.log("Host Name : " + q.hostname);
console.log("Host : " + q.host);
console.log("PathName : " + q.pathname);
console.log("QueryParameters : " + q.search);

const q_data = q.query;
console.log(q_data); // q_data.name = bablue

http.createServer(function(req,res){
    const q = url.parse(req.url,true);
    const fileName = "." + q.pathname;
    fs.readFile(fileName,function(err,data){
        if(err){
            res.writeHead(404,{'content-type':'text/html'});
            res.write("404 Not Found!");
            return res.end();
        }
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end(); 
    });
}).listen(8080);
 const http = require("http");
 const fs = require("fs");
 const url = require("url");

 const myServer = http.createServer( (req,res) => {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url} New Req Received \n`
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    
    fs.appendFile("log.txt",log, (err,data) => {
    switch(myUrl.pathname){
        case '/':
            res.end("Home Page");
            break;
        case '/about':
            const username = myUrl.query.myname;
            res.end(`this is , ${username}`);
            break;
        case '/search':
            const search = myUrl.query.search_query;
            res.end("here are your results for " + search);
            break;
        default:
            res.end("404 not found");
    }
    });
 });
 myServer.listen(8080,() => {
    console.log("server is successfully started")
 })

 //create a server object:
http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
  }).listen(8000); 
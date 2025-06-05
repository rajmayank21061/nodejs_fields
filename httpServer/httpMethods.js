 const http = require("http");
 const fs = require("fs");
 const url = require("url");

 const myServer = http.createServer( (req,res) => {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received \n`
    const myUrl = url.parse(req.url,true);
    
    fs.appendFile("log.txt",log, (err,data) => {
    switch(myUrl.pathname){
        case '/':
            if(req.method === 'GET');
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
        case '/signup':
            if(req.method === 'GET') res.end("This is a signup Form.");

            //req.method === 'POST' & It's a db query
            else res.end("Form Submitted Succesfully.");
            break;
        default:
            res.end("404 not found");
    }
    });
 });
 myServer.listen(8080,() => {
    console.log("server is successfully started")
 })
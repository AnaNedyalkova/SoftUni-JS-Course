const http = require("http"); //build in module that allows node.js to tranfer data over HTTP
const fs = require('fs');
const htmlHome = fs.readFileSync('./index.html')

//chained methods to http to create server and post responses
http.createServer((req, res) => {
    // in writeHead we write status codes of what we answer as a server
res.writeHead(200)
res.write(htmlHome);
res.end(); //close the response
}).listen(3300, ()=> console.log('Server is running on port 3300'));
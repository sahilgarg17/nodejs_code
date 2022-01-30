const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    data = fs.readFileSync(`${__dirname}/userApi/userApi.json`, "utf-8");
    const objData = JSON.parse(data);
       
  //  console.log(req.url);
    if(req.url == "/") {
        res.end("Hello from Home side");
    }
    else if(req.url == "/about") {
        res.end("Hello from aboutUs side");
    }
    else if(req.url == "/contact") {
        res.end("Hello from contactUs side");
    }
    else if(req.url == "/userapi") {
        res.end(objData[3].name);
       // res.end("Hello from userapi side");
    }
    else{
        res.writeHead(404, {"Content-type": "text/html" });
        res.end("<h1>404 page not found</h1>");
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Listening to port no. 3000");
});
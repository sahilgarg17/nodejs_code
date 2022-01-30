const http = require("http");
const fs = require("fs");
var requests = require("requests");

//const homeFile = fs.readFileSync();

const server = http.createServer((req, res) => {
    if(req.url == "/") {
        requests('https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=6350e8b5c9b5e7e6c24e39375cddee78')
        .on('data', function (chunk) {
          const objData = JSON.parse(chunk);
          const arrData = [objData];
          console.log(arrData[0].main.temp)
        })
        .on('end', function (err) {
          if (err) return console.log('connection closed due to errors', err);
         
          console.log('end');
        });
    }
});

server.listen(8000, "127.0.0.1");  



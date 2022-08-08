const http = require("http");

const server = http.createServer((req, res) => {
    switch(req.url){
        case "/":
            res.writeHead(200, {"Content-Type" : "application/json"});
            res.write(JSON.stringify({id: 0, player: "Spanoulis"}));
            res.end();
            break;
        case "/prova":
            res.writeHead(200, {"Content-Type" : "application/json"});
            res.write(JSON.stringify("Questa e' una prova"));
            res.end();
            break;
        default:
            res.writeHead(404, "application/json");
            res.write("Error, page does not exist");
            res.end();
            break;
    }
});

server.listen("https://api-prova-jas2we3wi-kevin2133.vercel.app/");
console.log("Server listening on port 3000.....")

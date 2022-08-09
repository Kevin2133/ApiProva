const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors({origin: "https://easycodingkev.netlify.app/"}));
const data = require("./data.json");

let port = process.env.PORT || 3000;

server.get("/", (req, res) => {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(data));
    res.end();
});

server.get("/manuel", (req, res) => {
    res.header("Content-Type", "application/json");
    res.send("Bella Elia");
    res.end();
});

server.listen(port, () => {
    console.log("Server has started");
});

const express = require("express");
const server = express();
const data = require("./data.json");

let port = process.env.PORT || 3000;

server.get("/", (req, res) => {
    res.send(JSON.stringify(data));
});

server.get("/manuel", (req, res) => {
    res.send("Bella Elia");
});

server.listen(port, () => {
    console.log("Server has started");
});

const express = require("express");
const server = express();
const data = require("./data.json");

const port = 3000;

server.get("/", (req, res) => {
    res.send(JSON.stringify(data));
});

server.get("/manuel", (req, res) => {
    res.send("Bella Manuel");
});

server.listen(port, () => {
    console.log("Server has started");
});
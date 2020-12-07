const http = require("http");
const express = require("express");
const { ExpressPeerServer } = require("peer");

const app = express();

const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/",
});

app.use("/", peerServer);

server.listen(9000);

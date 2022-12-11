const api = require("./api");
const server = require("http").createServer(api);
const socket = require("./socket");
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const PORT = 3000;

server.listen(PORT);
console.log(`Listening to ${PORT}`);

socket.listen(io);

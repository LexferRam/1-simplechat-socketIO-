const Server = require("./models/server");
require("dotenv").config();

const server = new Server();

server.execute();

//SERVIDOR SIN CLASES

// const express = require("express");

// //servidor de express
// const app = express();

// //servidor de sockets
// const server = require("http").createServer(app);

// //configuracion del socket server
// const io = require("socket.io")(server);

// app.use(express.static(__dirname + "/public"));

// //el evento io de socketio es para escuchar un evento emitido del client
// io.on("connection", (socket) => {
//   //el parametro socket hace referencia al cliente(cada conexion viene con un id, socket.id), console.log(socket.id)
//   console.log("Cliente connectado");

//   //emitiendo un evento desde el servidor
//   socket.emit("mensaje-bienvenida", {
//     mgs: "Bienvenido al server de socket",
//     fecha: new Date(),
//   });

//   socket.on("mensaje-to-server", (data) => {
//     console.log(data);
//     //socket solo envia en msg al quien lo envio
//     //io se lo envia a todos los clientes conectados
//     io.emit("mensaje-from-server", data);
//   });
// });

// server.listen(8080, () => {
//   console.log("server on port 8080");
// });

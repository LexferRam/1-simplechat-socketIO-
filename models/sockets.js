class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      //***************************************************** */
      //escuchando evento mensaje-to-server que viene del servidor
      socket.on("mensaje-to-server", (data) => {
        //emitiendo mensaje al servidor enviado desde el clente
        this.io.emit("mensaje-from-server", data);
      });
      //***************************************************** */
    });
  }
}

module.exports = Sockets;

/*
  Name: Riccardo Reali
  Student ID:301242893
  Course: COMP229
  Date: 2022-10-21
  Assignment 2
*/

import debug from "debug";
import { fstat } from "fs";
debug("comp-229");
import http from "http";
import app from "./app/app.js";

//SET MY PORT TO 3000
const PORT = normalizePort(process.env.PORT || 3000);
app.set("port", PORT);

//CREATES THE SERVER
const server = http.createServer(app);


server.listen(PORT); //START THE SERVER
server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  let bind = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  let addr = server.address();
  let bind = "pipe " + addr;
  debug("Listening on " + bind);
}


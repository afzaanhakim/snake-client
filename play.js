const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542}, () => {
    //console.log("connection established")
  });

  


  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on ("connect", () => {
    console.log("have been added")
    
    })

  return conn;

 

};

console.log("Connecting ...");
connect();
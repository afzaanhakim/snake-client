const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });

  


  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on ("connect", () => {
    console.log("Successfully connected to game server")
    
    // setInterval((write) => {conn.write('Move: left')}, 
    // 50);
    
  });
  conn.write("Name: ANH");
    
    
 
    


  //console.log("hi")
    
  conn.on('data', (data) => {
    console.log(`Message from server: ${data}`);
    });


 

  return conn;

 

};

// connect();

module.exports = {connect};
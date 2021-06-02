const net = require("net");
const {connect} = require('./client') //-> requiring connect function from client file

// establishes a connection with the game server


const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function (key) {
  
    // process.stdin.on('data', (key) => {
  
  
      if (key === '\u0003') {
        process.exit();
      } 
  }
  
  stdin.on("data", handleUserInput);

  return stdin;

}




setupInput(connect())
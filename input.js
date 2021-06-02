let connection;
  const handleUserInput = function (key) {
  
      if (key === '\u0003') {
        process.exit();
      } 
      if (key === "a" || key === "A"){
        connection.write("Move: left")
        console.log("left")
      }
      if (key === "w" || key === "W"){
        connection.write("Move: up")
        console.log("up")
      }

      if (key === "d" || key === "D"){
        connection.write("Move: right")
        console.log("right")
      }

      if (key === "s" || key === "S"){
        connection.write("Move: down")
        console.log("down")
      }
  }

 const setupInput = (conn) => {
  
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  
  stdin.on("data", (key) => {
    console.log(key)
    handleUserInput(key)

  });

  return stdin;

}
module.exports = {setupInput}
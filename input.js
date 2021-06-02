let connection;
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } if (key === "a" || key === "A") {
    connection.write("Move: left");
  } if (key === "w" || key === "W") {
    connection.write("Move: up");
  } if (key === "d" || key === "D") {
    connection.write("Move: right");
  } if (key === "s" || key === "S") {
    connection.write("Move: down");
  } if (key === "g" || key === "G") {
    connection.write("Say: hello");
  } if (key === "b" || key === 'B') {
    connection.write("Say: Bye!!");
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    handleUserInput(key);

  });
  return stdin;
};
module.exports = {setupInput};
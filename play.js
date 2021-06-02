const net = require("net");
const {connect} = require('./client') //-> requiring connect function from client file
const {setupInput} = require("./input");

console.log("Connecting ...");
connect();

setupInput();
const pwd = require("./pwd");
const fs = require("./ls");
const cat = require("./cat");

process.stdout.write("prompt > ");
pwd();
fs();
cat();

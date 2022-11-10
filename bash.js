const pwd = require("./pwd");
const fs = require("./ls");
const cat = require("./cat");
const date = require("./date");
const echo = require("./echo");
const head = require("./head");

process.stdout.write("prompt > ");
pwd(done);
fs(done);
cat(done);
date(done);
echo(done);
head(done);

function done(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

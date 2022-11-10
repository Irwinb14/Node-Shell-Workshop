const pwd = require("./pwd");
const fs = require("./ls");
const cat = require("./cat");

process.stdout.write("prompt > ");
pwd(done);
fs(done);
cat(done);

function done(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

// module.exports = function done(output) {
//   process.stdout.write(output);
//   process.stdout.write("\nprompt > ");
// };

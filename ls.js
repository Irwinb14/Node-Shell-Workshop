// process.stdout.write("prompt > ");
let done = require("./bash");

const fs = require("fs");
module.exports = function (done) {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd == "ls") {
      fs.readdir(process.cwd().toString(), (err, files) => {
        if (err) {
          done("Something went wrong");
        } else {
          done(files.join("\n"));
        }
      });
    }
  });
};

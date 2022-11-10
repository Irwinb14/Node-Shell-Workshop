// process.stdout.write("prompt > ");
const { doesNotMatch } = require("assert");
const fs = require("fs");
const { threadId } = require("worker_threads");

module.exports = function (done) {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    const cmdName = cmd.split(" ")[0];
    let file = cmd.split(" ")[1];

    if (cmdName == "cat") {
      fs.readFile(process.cwd().toString() + "/" + file, (err, data) => {
        if (err) {
          done("something went wrong");
        } else {
          done(data.toString());
        }
      });
    }
  });
};

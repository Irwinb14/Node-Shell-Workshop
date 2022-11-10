// process.stdout.write("prompt > ");
const fs = require("fs");
const { threadId } = require("worker_threads");

module.exports = function () {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    const cmdName = cmd.split(" ")[0];
    let file = cmd.split(" ")[1];

    if (cmdName == "cat") {
      fs.readFile(process.cwd().toString() + "/" + file, (err, data) => {
        if (err) throw err;
        console.log(data.toString());
        process.stdout.write("\nprompt > ");
      });
    }
  });
};

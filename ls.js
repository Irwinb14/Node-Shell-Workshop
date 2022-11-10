// process.stdout.write("prompt > ");

const fs = require("fs");
module.exports = function () {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd == "ls") {
      fs.readdir(process.cwd().toString(), (err, files) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(files.join("\n"));
          process.stdout.write("\nprompt > ");
        }
      });
    }
  });
};

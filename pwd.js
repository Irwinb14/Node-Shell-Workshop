// process.stdout.write("prompt > ");

module.exports = function (done) {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim(); //remove the newline
    if (cmd == "pwd") {
      done(process.cwd());
    }
  });
};

// process.stdout.write("\nprompt > ");

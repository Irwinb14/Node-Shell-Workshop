// process.stdout.write("prompt > ");

module.exports = function () {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim(); //remove the newline
    if (cmd == "pwd") {
      process.stdout.write(process.cwd());
      process.stdout.write("\nprompt > ");
    }
  });
};

// process.stdout.write("\nprompt > ");

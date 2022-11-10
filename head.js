const fs = require("fs");
const readline = require('readline')
module.exports = function (done) {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    const cmdName = cmd.split(" ")[0];
    let file = cmd.split(" ")[1];
    if (cmdName == "head") {
        let r = readline.createInterface({
            input: fs.createReadStream(process.cwd().toString() + "/" + file)
        });
        r.on('line', function(text){
                console.log(text)
        })
    }
      /*fs.readFile(process.cwd().toString() + "/" + file, (err, data) => {
        if (err) {
          done("something went wrong");
        } else {
          done(data.toString());
        }
      });*/
    })
  }


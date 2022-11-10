module.exports = function(done){
    process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
  if (cmd == "date") {
     let dateTime = new Date();
     let day = ("0" + dateTime.getDate()).slice(-2);
     let month = dateTime.getMonth() + 1;
     let year = dateTime.getFullYear()
     done(`${month}/${day}/${year} ${dateTime.getHours()}:${dateTime.getMinutes()}`);
  }
})
}

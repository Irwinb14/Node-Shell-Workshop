module.exports = function(done){
    process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    let first = cmd.slice(0, 4);
    if (first == "echo"){
        done(cmd.slice(5))
    }
 })
}
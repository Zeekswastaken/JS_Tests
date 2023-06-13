"use strict";

const fs = require('fs');
// const spawn = require('child_process').spawn;
// if (!process.argv[2])
//     throw Error("A file must be specified!!");
// fs.watch(process.argv[2], function(){
// console.log("File " + process.argv[2] + " just changed!");
// let ls = spawn('ls', ['-lh', process.argv[2]]),
// output = '';
// ls.stdout.on('data', function(chunk){
//     output += chunk.toString();   
// });
// // ls.stdout.pipe(process.stdout);
// ls.on('close', function(){
//     let parts = output.split(/\s+/);
//     console.dir([parts[0], parts[4], parts[8]]);
// });
// });
// console.log("Watching " + process.argv[2] + " for any changes... "); 



fs.writeFile(process.argv[2], 'a witty message', function (err){
    if (err)
        throw err;
    console.log("File saved");
})
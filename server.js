"use strict"
// const
//     net = require('net'),
//     fs = require('fs'),
//     filename = process.argv[2],
//     server = net.createServer(function(connection){
//         console.log("Subscriber connected");
//         connection.write(JSON.stringify({
//             type: 'watching',
//             file: filename
//         }) + '\n');
//         //Watcher setup
//         let watcher = fs.watch(filename, function(){
//             connection.write(JSON.stringify({
//                 type: 'changed',
//                 file: filename,
//                 timestamp: Date.now()
//             }) + "\n");
//         });

//         //Disconnecting
//         connection.on("close", function(){
//             console.log("Subscriber disconnected.")
//             watcher.close();
//         });
//     });
//     if (!filename)
//         throw Error("No file name was specified");
//     server.listen(5432, function(){
//         console.log("Listening for subscribers...");
//     });
//     // server.listen('/tmp/watcher.sock', function() {
//     //     console.log('Listening for subscribers...');
//     //     });

const http = require('http');
const fs = require ('fs');
const _ = require('loadash');
const server = http.createServer((req, res) => {
    //loadash
    const num = _.random(0, 20);
    //set header content type
    res.setHeader('Content-Type', 'text/html');
    let path = './html/';
    switch(req.url){
        case '/':
            path += 'home.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
    }
    console.log("-----> " + path);
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            // res.write(data);
            res.end(data);
        }
    })
    // res.write('<h1>Stupid doge</h1>');
    // res.end();
});
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})
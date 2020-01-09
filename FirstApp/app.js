// Node core Modules Https, https, file system(fs), path, os
//NodeJS Program lifecycle
// Start script -> Parse Code, register vars, functions -> event loop(Keeps running as long as there is a listener registered) -> Process.exit()
const  http = require('http');

const routes = require('./routes');

console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);
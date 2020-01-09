const http = require('http');

const server = http.createServer(() => {
    console.log("server started 1");
});

server.listen(3000);
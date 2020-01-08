// Node core Modules Https, https, file system(fs), path, os
//NodeJS Program lifecycle
// Start script -> Parse Code, register vars, functions -> event loop(Keeps running as long as there is a listener registered) -> Process.exit()
const  http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    
    if (url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');    
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello World from my nodejs server.</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
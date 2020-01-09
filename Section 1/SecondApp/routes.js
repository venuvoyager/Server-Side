const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/' && method === 'GET') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Create User</title></head>');
        res.write('<h4>Username: </h4>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/users' && method === 'GET') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><ul><li>User1</li><li>User2</li><li>User3</li><li>User4</li></ul></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const userName = parsedBody.split('=')[1];
            console.log(userName);
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            res.end();
        })
    }
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h4>Welcome to my new page</h4></body>')
    res.write('</html>');
    res.end();
}

exports.handler = requestHandler;
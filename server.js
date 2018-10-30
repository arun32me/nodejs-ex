const http = require('http');

http.createServer(handleRequest).listen(8080, console.log('Server listening on port'));

function handleRequest(req, res) {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('<h1>Hello World</h1>');
        res.end();
    }
}
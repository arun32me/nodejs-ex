const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.readFile('./index.html', null, function(error, data) {
            if(error) {
                res.writeHead(404);
                res.write('Not Found!');
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    } else {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('<h1>Access denied!</h1>');
        res.end();
    }
}).listen(3000, console.log('Server listening...'));

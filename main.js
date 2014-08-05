var http = require('http');
var fs = require('fs');

fs.readFile('hello.html', function (error, html) {
    if (error) {
        throw error;
    }

    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.end(html, 'utf8');
    }).listen(8888);
});

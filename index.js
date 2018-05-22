import http from "http";

http.createServer(function (request, response) {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.end("Hello World\n");
}).listen(process.end.PORT || 4200);


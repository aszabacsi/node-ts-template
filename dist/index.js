"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.write('Success');
    res.end();
});
server.listen(process.env.port || 8000);
//# sourceMappingURL=index.js.map
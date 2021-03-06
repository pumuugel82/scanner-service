"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = require("ws");
var wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
        if (data && data.toString().length > 0) {
            console.log('received: %s', data);
        }
        else {
            console.log('received null');
        }
    });
    ws.send('something');
});

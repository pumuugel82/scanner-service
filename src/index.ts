import { RawData, WebSocketServer, WebSocket } from 'ws';
import { exec } from 'child_process';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws: WebSocket) {
  ws.on('message', function message(data: RawData) {
      if (data &&  data.toString().length>0) {
          console.log('received: %s', data);
      } else {
          console.log('received null');
      }
      callScanner(ws);

  });

  ws.send('something');
});

function callScanner(ws: WebSocket): void {
    exec('./../scanner.sh', (err) => {
        if (err) {
            ws.send("error");
        } else {
            ws.send("finished scanning.");
        }
    } );
}
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import SocketIo from 'socket.io';

import { dbConnect } from './db';
import { subscribe } from './redis/subscribe';
import quiz from './routes/quiz'
import { API_PORT, API_HOST } from './config';

const app = express();
const server = new http.Server(app);
const io = new SocketIo(server);
dbConnect();

app.use(bodyParser.json());
app.use(quiz)
io.path('/ws');

if (API_PORT) {
  const runnable = app.listen(API_PORT, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('----\n==> 🌎  API is running on port %s', API_PORT);
    console.info('==> 💻  Send requests to http://%s:%s', API_HOST, API_PORT);
  });

  io.on('connection', (socket) => {
    subscribe(
      (message, value) => socket.emit(message, value)
    );
  });
  io.listen(runnable);
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}

import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import SocketIo from 'socket.io';
import { publish, createSubscription } from './questionResult';
import { API_PORT, API_HOST, QUIZ_API_HOST, QUIZ_API_PORT } from './config';
import fetch from 'isomorphic-fetch'

const app = express();
const server = new http.Server(app);
const io = new SocketIo(server);
const subscription = createSubscription();

app.use(bodyParser.json());

app.get('/quiz/active', (req,res) => {
  fetch(`http://${QUIZ_API_HOST}:${QUIZ_API_PORT}/quiz/active`)
    .then(response => response.json())
    .then(quiz => res.send(quiz))
    .catch(error => res.send(error));
});

app.post('/quiz/answer', (req, res) => {
  publish(req.body)
    .then(value => res.send(value))
    .catch(error => res.send(error));
})

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
    subscription.subscribe(
      (message, value) => socket.emit(message, value)
    );
  });
  io.listen(runnable);
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}

import redis from 'redis'
import { REDIS_HOST, REDIS_PORT, QUESTION_ANSWER } from './config'

let subscriptions = [];
const sub = redis.createClient({host: REDIS_HOST, port: REDIS_PORT});

sub.on("error", function (err) {
    console.log("Error " + err);
});

sub.on("subscribe", (channel, count) =>
  console.log("Subscribed to " + channel + ". Now subscribed to " + count + " channel(s).")
);

sub.on("message",(channel, message) => {
   subscriptions.forEach(s => s(QUESTION_ANSWER, JSON.parse(message)))
});

sub.subscribe(QUESTION_ANSWER);

export const subscribe = (callback) => {
  subscriptions.push(callback);
}

import redis from 'redis'
import { REDIS_OPTIONS, QUESTION_ANSWER_CHANNEL } from './config'

let subscriptions = [];
const sub = redis.createClient(REDIS_OPTIONS);

sub.on("error", function (err) {
    console.log("Error " + err);
});

sub.on("subscribe", (channel, count) =>
  console.log("Subscribed to " + channel + ". Now subscribed to " + count + " channel(s).")
);

sub.on("message",(channel, message) => {
   subscriptions.forEach(s => s(QUESTION_ANSWER_CHANNEL, JSON.parse(message)))
});

sub.subscribe(QUESTION_ANSWER_CHANNEL);

export const subscribe = (callback) => {
  subscriptions.push(callback);
}

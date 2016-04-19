import redis from 'redis'
import { REDIS_HOST, REDIS_PORT } from './config'

const QUESTION_ANSWER = 'question_answer';
const REDIS_OPTIONS = {host: REDIS_HOST, port: REDIS_PORT};
const pub = redis.createClient(REDIS_OPTIONS);
const sub = redis.createClient(REDIS_OPTIONS);
const client = redis.createClient(REDIS_OPTIONS);

export function createSubscription(onNext){
  let subscriptions = [];

  const subscribe = (callback) => {
    subscriptions.push(callback);
  }

  sub.on("subscribe", (channel, count) =>
    console.log("Subscribed to " + channel + ". Now subscribed to " + count + " channel(s).")
  );

  sub.on("message",(channel, message) => {
    console.log("Message from channel " + channel + ": " + message)
    for (var i = 0; i < subscriptions.length; i++) {
     subscriptions[i](QUESTION_ANSWER, JSON.parse(message));
   }
  });

  sub.subscribe(QUESTION_ANSWER);

  return { subscribe }
}


export function publish(answer){
  return new Promise((resolve, reject) => {
    const key = `answers-${answer.question}${answer.option}`;
    client.incr(key, (err, value) => {
        if (err){
          console.log(err);
          return reject(err)
        }
        else{
          const result = {
              id:answer.question,
              option:answer.option,
              result:Number(value)
          }
          pub.publish(QUESTION_ANSWER, JSON.stringify(result));
          return reject(result)
        }
      })
  });
}

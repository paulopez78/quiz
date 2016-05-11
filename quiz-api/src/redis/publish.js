import redis from 'redis'
import { REDIS_OPTIONS, QUESTION_ANSWER_CHANNEL } from './config'

const pub = redis.createClient(REDIS_OPTIONS);
const client = redis.createClient(REDIS_OPTIONS);

client.on("error", function (err) {
    console.log("Error " + err);
});

pub.on("error", function (err) {
    console.log("Error " + err);
});

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
          pub.publish(QUESTION_ANSWER_CHANNEL, JSON.stringify(result));
          return reject(result)
        }
      })
  });
}

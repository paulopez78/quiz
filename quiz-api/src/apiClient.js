import http from "http";
import { QUIZ_API_HOST, QUIZ_API_PORT } from './config'

export function getQuiz(){
  return new Promise((resolve, reject) =>{
    const options = {
      host: QUIZ_API_HOST,
      port: QUIZ_API_PORT,
      path: '/quiz/active',
      method: 'GET'
    };

    const req = http.request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (data) => resolve(JSON.parse(data)));
    });

    req.on('error', (error) => reject(error.message));
    req.end();
  });
}

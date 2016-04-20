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
      var data = '';
      res.on('data', (chunk) => {
        data += chunk;

        // Hack thanks to Kestrel server not ending the connection
        if (isJSON(data)){
          resolve(JSON.parse(data));
        }
      });

      res.on('end', () => resolve(JSON.parse(data)));
    });

    req.on('error', (error) => reject(error.message));
    req.end();
  });
}

function isJSON (json) {
  var parsed
  try {
    parsed = JSON.parse(json)
    return true;
  } catch (e) {
    return false;
  }
}

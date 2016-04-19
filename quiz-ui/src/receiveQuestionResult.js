import { receiveQuestionResult } from './actions'

export function receive2(dispatch){
  const result = {
    id:2,
    options:[
      { id:4, result: getRandomInt(1,100) },
      { id:5, result: getRandomInt(1,100) },
      { id:6, result: getRandomInt(1,100) }
    ]
  }

  return receiveQuestionResult(result);
}

export function receive1(dispatch){
  const result = {
    id:1,
    options:[
      { id:1, result: getRandomInt(1,100) },
      { id:2, result: getRandomInt(1,100) },
      { id:3, result: getRandomInt(1,100) }
    ]
  }

  return receiveQuestionResult(result);
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

import { RECEIVE_QUESTION_RESULT } from '../constants';

export default function receiveQuestionResult(question){
  return{
    type: RECEIVE_QUESTION_RESULT,
    question
  }
}

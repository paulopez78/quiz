import fetch from 'isomorphic-fetch';
import { selectedQuestion } from '../containers/common';
import {
  POST_QUESTION_ANSWER,
  POST_QUESTION_ANSWER_SUCCESS,
  POST_QUESTION_ANSWER_ERROR,
} from '../constants';

function requestPostQuestionAnswer(answer) {
  return {
    type: POST_QUESTION_ANSWER,
    answer
  }
}

function postQuestionAnswerError(error) {
  return {
    type: POST_QUESTION_ANSWER_ERROR,
    error: error.message
  }
}

function postQuestionAnswerSuccess(answer) {
  return {
    type: POST_QUESTION_ANSWER_SUCCESS,
    answer,
  }
}

export default function postQuestionAnswer(questionId) {
  return (dispatch, getState) => {
    const {
      selectedOption
    } = selectedQuestion(questionId, getState().quiz.questions);

    const answer = {
      question: questionId,
      option: selectedOption
    }

    dispatch(requestPostQuestionAnswer(answer))
    return fetch('/api/quiz/answer',
      {
        method: 'POST',
        body: JSON.stringify(answer),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response =>
        dispatch(postQuestionAnswerSuccess(response))
      )
      .catch(error =>
        dispatch(postQuestionAnswerError(error))
      )
  }
}

import fetch from 'isomorphic-fetch'

import {
  REQUEST_QUIZ,
  RECEIVE_QUIZ,
  REQUEST_QUIZ_ERROR,
} from '../constants';

function requestActiveQuiz() {
  return {
    type: REQUEST_QUIZ
  }
}

function requestActiveQuizError(error) {
  return {
    type: REQUEST_QUIZ_ERROR,
    error: error.message
  }
}

function receiveActiveQuiz(quiz) {
  return {
    type: RECEIVE_QUIZ,
    quiz,
  }
}

export default function fetchActiveQuiz() {
  return dispatch => {
    dispatch(requestActiveQuiz())
    return fetch("/api/quiz/active")
      .then(response => response.json())
      .then(quiz => dispatch(receiveActiveQuiz(quiz)))
      .catch(error => dispatch(requestActiveQuizError(error)))
  }
}

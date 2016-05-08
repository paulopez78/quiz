import fetch from 'isomorphic-fetch'

import {
  REQUEST_QUIZ_LIST,
  RECEIVE_QUIZ_LIST,
  REQUEST_QUIZ_LIST_ERROR,
} from '../constants';

function requestQuizList() {
  return {
    type: REQUEST_QUIZ
  }
}

function requestQuizListError(error) {
  return {
    type: REQUEST_QUIZ_LIST_ERROR,
    error: error.message
  }
}

function receiveQuizList(quiz) {
  return {
    type: RECEIVE_QUIZ_LIST,
    quiz,
  }
}

export default function fetchQuizList() {
  return dispatch => {
    dispatch(requestQuizList())
    return fetch("/api/quiz/")
      .then(response => response.json())
      .then(quiz => dispatch(receiveQuizList(quiz)))
      .catch(error => dispatch(requestQuizListError(error)))
  }
}

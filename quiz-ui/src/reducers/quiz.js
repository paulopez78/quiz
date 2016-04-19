import question from './question';
import {
  SELECT_OPTION,
  TOGGLE_ANSWER,
  TOGGLE_RESULT,
  REQUEST_QUIZ,
  RECEIVE_QUIZ,
  REQUEST_QUIZ_ERROR,
  RECEIVE_QUESTION_RESULT
} from '../constants';

export function quiz (state = {
    name:'',
    questions:[],
    isFetching:false
  }, action){
  switch (action.type) {
    case SELECT_OPTION:
    case TOGGLE_ANSWER:
    case TOGGLE_RESULT:
    case RECEIVE_QUESTION_RESULT:
      return {...state,
        questions: state.questions.map((q) => question(q, action))
      }
    case REQUEST_QUIZ:
      return {...state,
        error: '',
        isFetching: true
      }
    case RECEIVE_QUIZ:
      return {...state,
        isFetching: false,
        error: '',
        name: action.quiz.name,
        questions: action.quiz.questions,
      }
    case REQUEST_QUIZ_ERROR:
      return {...state,
        isFetching: false,
        error:action.error
      }
    default:
      return state;
  }
}

import option from './option';
import {
  SELECT_OPTION,
  TOGGLE_ANSWER,
  TOGGLE_RESULT,
  RECEIVE_QUESTION_RESULT
} from '../constants';

export default function question (state, action){
  switch (action.type) {
    case SELECT_OPTION:
      if (state.id === action.question){
        return {...state, selectedOption: action.option}
      }
      return {...state};
    case TOGGLE_ANSWER:
      if (state.id === action.question){
        return {...state, answerVisible: !state.answerVisible, resultVisible: false }
      }
      return {...state};
    case TOGGLE_RESULT:
      if (state.id === action.question){
        return {...state, resultVisible: !state.resultVisible, answerVisible: false }
      }
      return {...state};
    case RECEIVE_QUESTION_RESULT:
      if (state.id === action.question.id){
        return {...state,
          options: state.options.map(
            (o) => option(o, action)
          )
        }
      }
      return {...state};
    default:
      return state;
    }
}

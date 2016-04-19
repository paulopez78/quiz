import { RECEIVE_QUESTION_RESULT } from '../constants';

export default function option (state, action){
  switch (action.type) {
    case RECEIVE_QUESTION_RESULT:
      if (state.id === action.question.option){
        return {
          ...state,
          result: action.question.result
        }
      }
      return {...state};
    default:
      return state;
  }
}

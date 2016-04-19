import { TOGGLE_RESULT } from '../constants';

export default function toggleResult (question) {
  return {
    type: TOGGLE_RESULT,
    question: question
  }
}

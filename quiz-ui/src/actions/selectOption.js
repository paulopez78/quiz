import { SELECT_OPTION } from '../constants';

export default function selectOption (question, option) {
  return {
    type: SELECT_OPTION,
    question: question,
    option: option
  }
}

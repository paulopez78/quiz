import { TOGGLE_ANSWER } from '../constants';

export default function toggleAnswer (question) {
  return {
    type: TOGGLE_ANSWER,
    question: question
  }
}

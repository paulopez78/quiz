export function selectedQuestion(questionId, questions){
  return questions.find((x) => x.id === questionId) || {
    answerVisible: false,
    resultVisible: false,
    selectedOption:-1,
    options:[]
  }
}

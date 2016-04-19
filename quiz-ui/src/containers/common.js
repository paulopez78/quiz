export function selectedQuestion(questionId, questions){
  const {
    answerVisible,
    resultVisible,
    selectedOption,
    options
  } = questions.find((x) => x.id === questionId) || {
    answerVisible: false,
    resultVisible: false,
    selectedOption:-1,
    options:[]
  }

  return {
    answerVisible,
    resultVisible,
    selectedOption,
    options
  }
}

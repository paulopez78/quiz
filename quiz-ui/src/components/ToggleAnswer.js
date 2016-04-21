import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const ToggleAnswer = (
  {
    questionId,
    answerVisible,
    optionSelected,
    toggleAnswer,
    postAnswer
  }
) =>
<div style={{display:'inline-block'}}>
  {optionSelected &&
  <Button onClick={() =>{
    if (optionSelected && !answerVisible){
        postAnswer(questionId);
    }
    if(optionSelected){
      toggleAnswer(questionId)
    }
  }}>
    { answerVisible ? 'Hide Answer':'Show Answer' }
  </Button>}
</div>;

export default ToggleAnswer;

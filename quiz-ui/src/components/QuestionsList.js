import React from 'react';
import Question from './Question';

const QuestionsList = ({ questions }) =>
<div style={{display:'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
  {questions.map(question =>
    <Question
      key={question.id}
      {...question}/>)
  }
</div>

export default QuestionsList;

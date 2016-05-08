import React from 'react'

const QuizList = (quizzes) =>
<div>
  {quizzes.map(({id, name}) => <div key={id}>{name}</div>)}
</div>

import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const ToggleResult = (
  {
    questionId,
    resultVisible,
    toggleResult
  }
) =>
  <Button onClick={() => toggleResult(questionId)}>
    { resultVisible ? 'Hide Result':'Show Result' }
  </Button>;

export default ToggleResult;

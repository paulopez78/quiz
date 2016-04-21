import React, { Component } from 'react';
import OptionsListContainer from '../containers/OptionsListContainer';
import ToggleAnswerContainer from '../containers/ToggleAnswerContainer';
import Panel from 'react-bootstrap/lib/Panel';
import ToggleResultContainer from '../containers/ToggleResultContainer';

const Question = ({ id, name, options }) =>
    <Panel header={name} style={{minWidth:'300px'}}>
      <OptionsListContainer
        questionId={id}
        options={options}/>
        <ToggleAnswerContainer
          questionId={id}/>
        {' '}
        <ToggleResultContainer
          questionId={id}/>
    </Panel>;

export default Question;

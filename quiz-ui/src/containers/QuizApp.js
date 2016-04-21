import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchActiveQuiz } from '../actions';
import QuestionsList from '../components/QuestionsList';

class QuizApp extends Component{
  render(){
    const { questions, isFetching, name, error } = this.props;
    const isEmpty = questions.length === 0;

    return(
      <div>
        <h3>{name}</h3>
        {isEmpty
          ? <h2>No active quiz!</h2>
          : <div>
              <QuestionsList questions={questions}/>
            </div>
        }
        {error}
      </div>
    );
  }
}

function mapStateToProps(state){
  const { isFetching, questions, name, error } = state.quiz;
  return {
    name: name,
    isFetching: isFetching,
    questions: questions,
    error: error
  }
}

export default connect(mapStateToProps)(QuizApp);

import { connect } from 'react-redux';
import { toggleAnswer, postQuestionAnswer } from '../actions';
import { selectedQuestion } from './common'
import ToggleAnswer from '../components/ToggleAnswer';

function mapStateToProps(state, ownProps){
  const { questions } = state.quiz;
  const { questionId } = ownProps;

  const {
    answerVisible,
    selectedOption
  } = selectedQuestion(questionId, questions);

  return {
    answerVisible,
    optionSelected : selectedOption >= 0
  }
}

function mapDispatchToProps(dispatch){
  return {
    toggleAnswer: (questionId) => {
      dispatch(toggleAnswer(questionId));
    },
    postAnswer: (questionId) => {
      dispatch(postQuestionAnswer(questionId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleAnswer);

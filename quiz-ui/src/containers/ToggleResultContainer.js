import { connect } from 'react-redux';
import { toggleResult } from '../actions';
import { selectedQuestion } from './common'
import ToggleResult from '../components/ToggleResult';

function mapStateToProps(state, ownProps){
  const { questions } = state.quiz;
  const { questionId } = ownProps;

  const {
    resultVisible
  } = selectedQuestion(questionId, questions);

  return {
    resultVisible
  }
}

function mapDispatchToProps(dispatch){
  return {
    toggleResult: (questionId) => {
      dispatch(toggleResult(questionId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleResult);

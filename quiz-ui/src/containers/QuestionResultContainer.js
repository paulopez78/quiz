import { connect } from 'react-redux';
import { selectOption } from '../actions';
import { selectedQuestion } from './common'
import OptionsList from '../components/QuestionResult';

function mapStateToProps(state, ownProps){
  const { questions } = state.quiz;
  const { questionId } = ownProps;

  const {
    answerVisible,
    selectedOption
  } = selectedQuestion(questionId, questions);

  return {
    options,
    selected: selectedOption
  }
}

export default connect(
  mapStateToProps
)(QuestionResult);

import { connect } from 'react-redux';
import { selectOption } from '../actions';
import { selectedQuestion } from './common'
import OptionsList from '../components/OptionsList';

function totalResults (options){
  return options.map(
    (option) => option.result || 0
  )
  .reduce(
    (prev, curr) => prev + curr
  );
}

function mapStateToProps(state, ownProps){
  const { questions } = state.quiz;
  const { questionId } = ownProps;

  const {
    answerVisible,
    resultVisible,
    selectedOption,
    options
  } = selectedQuestion(questionId, questions);

  return {
    total: totalResults(options),
    answerVisible,
    resultVisible,
    selected: selectedOption
  }
}

function mapDispatchToProps(dispatch, ownProps){
  const { questionId } = ownProps;
  return {
    selectOption: (optionId) =>
     dispatch(selectOption(questionId, optionId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsList);

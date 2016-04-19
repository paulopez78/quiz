import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import io from 'socket.io-client';

import { receiveQuestionResult } from './actions'
import configureStore from './store/configureStore'
import QuizApp from './containers/QuizApp';

const initialState = window.__INITIAL_STATE__ || {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <QuizApp/>
  </Provider>,
  document.getElementById('root')
);

function initSocket() {
  const socket = io('', {path: '/ws'});
  socket.on('question_answer', (data) => {
    console.log(data);
    store.dispatch(receiveQuestionResult(data))
  });

  return socket;
}

initSocket();

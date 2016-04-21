import React from 'react'
import fetch from 'isomorphic-fetch'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { API_HOST, API_PORT } from '../config';
import { DEVELOPMENT } from '../constants'
import quizApp from '../reducers'
import QuizApp from '../containers/QuizApp'

const targetUrl = `http://${API_HOST}:${API_PORT}`;

export default function render(res) {
  fetch(`${targetUrl}/quiz/active`)
    .then(response => response.json())
    .then(quiz => renderImpl(res, quiz))
    .catch(error => renderImpl(res, {questions:[], error}))
}

function renderImpl(res,state) {
  const stateFromApi = {quiz:{...state}}

  const store = createStore(quizApp, stateFromApi);
  const html = renderToString(
    <Provider store={store}>
      <QuizApp />
    </Provider>
  );
  const initialState = store.getState();
  res.send(renderFullPage(html, initialState));
  res.end();
}

const renderFullPage = (html, initialState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Quiz ui</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        ${!DEVELOPMENT
          ?
          `
          <script src="https://fb.me/react-15.0.1.min.js"></script>
          <script src="https://fb.me/react-dom-15.0.1.min.js"></script>
          `
          :''}
      </head>
      <body style="margin:15px">
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

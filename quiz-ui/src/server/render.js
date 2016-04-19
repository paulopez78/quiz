import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import quizApp from '../reducers'
import QuizApp from '../containers/QuizApp'

export default function render(req, res) {
  const stateFromApi = {quiz:{questions:[]}};
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

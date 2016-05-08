import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import configureStore from './store/configureStore'
import QuizAdminApp from './containers/QuizAdminApp'

const store = configureStore();

const List = () => <div>Hello List</div>
const Form = () => <div>Hello Forms</div>

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={QuizAdminApp}>
        <IndexRoute component={List}/>
        <Route path="quiz" component={Form}/>
      </Route>
    </Router>
  </Provider>
, document.getElementById('root'))

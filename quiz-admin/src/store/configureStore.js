import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import quizAdminApp from '../reducers/';

export default function configureStore(initialState) {
  const store = createStore(
    quizAdminApp ,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware,createLogger()),
      window.devToolsExtension ? window.devToolsExtension() : undefined
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

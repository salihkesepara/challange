import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'src/store/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from 'src/store/sagas'

const sagaMiddleware = createSagaMiddleware()

export default (initialState) => {
  const middleware = [sagaMiddleware]
  const composeEnhancers = process.env.NODE_ENV !== 'production' ? composeWithDevTools || compose : compose
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)))
  sagaMiddleware.run(rootSaga)

  return store
}

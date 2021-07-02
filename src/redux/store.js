import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import countReducer from './reducers/count'

const store = createStore(countReducer, applyMiddleware(thunk))

export default store

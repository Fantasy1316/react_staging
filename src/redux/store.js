import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import countReducer from './reducers/count'
import personReducer from './reducers/person'

const allReducer = combineReducers({
  count: countReducer,
  persons: personReducer
})

const store = createStore(allReducer, applyMiddleware(thunk))

export default store

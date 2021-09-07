import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import rocksReducer from './rockets/rocks';

const rootReducer = combineReducers({
  missionsReducer,
  rocksReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

window.store = store;

export default store;

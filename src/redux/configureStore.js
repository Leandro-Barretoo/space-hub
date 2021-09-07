import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  missionsReducer,
});

const fetchMissions = () => (dispatch) => {
  fetch('https://api.spacexdata.com/v3/missions')
    .then((response) => response.json());
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

window.store = store;

export default store;

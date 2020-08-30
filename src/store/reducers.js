import {RECEIVE_DATA, REQUEST_DATA, RECEIVE_ERROR} from './constants';
import {combineReducers} from 'redux';

const INITIAL_STATE = [];

const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return INITIAL_STATE;

    case RECEIVE_DATA:
      return action.data;

    case RECEIVE_ERROR:
      return action;

    default:
      return state;
  }
};

const error = (state = '', action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return state;

    case RECEIVE_DATA:
      return state;

    case RECEIVE_ERROR:
      return action.error;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data,
  error,
});
export default rootReducer;

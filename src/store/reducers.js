import {RECEIVE_DATA, REQUEST_DATA} from './constants';
import {combineReducers} from 'redux';

const INITIAL_STATE = [];

const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return INITIAL_STATE;

    case RECEIVE_DATA:
      return action.data;

    default:
      return state;
  }
};
const rootReducer = combineReducers({
  data,
});
export default rootReducer;

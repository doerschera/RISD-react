import { combineReducers } from 'redux';

import tour from './tourReducer';
import ask from './askReducer';

export default combineReducers({
  tour,
  ask
})

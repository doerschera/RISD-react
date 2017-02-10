import { combineReducers } from 'redux';

import tour from './tourReducer';
import ask from './askReducer';
import nav from './navReducer';

export default combineReducers({
  tour,
  ask,
  nav
})

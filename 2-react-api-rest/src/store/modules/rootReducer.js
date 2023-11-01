// combinar reducers para caso tiver mais de um
import { combineReducers } from 'redux';

import auth from './auth/reducer';

export default combineReducers({
  auth,
});

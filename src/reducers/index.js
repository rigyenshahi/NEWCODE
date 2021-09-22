import { combineReducers } from 'redux';

import userResponsesReducer from './userResponsesReducer';

import questionReducer from './questionReducer';

const rootReducer = combineReducers({
  question: questionReducer,
  userReponse: userResponsesReducer
});

export default rootReducer;

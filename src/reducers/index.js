import { combineReducers } from 'redux';
import posts from './postReducer';
import pages from './pageReducer';

export default combineReducers({
  posts,
  pages
});

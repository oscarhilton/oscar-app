import {
  GET_POSTS,
  RETURN_POSTS
} from '../actions/postActions/types';

const INITIAL_STATE = {
  loading: null,
  data: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        loading: true
      }
    case RETURN_POSTS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    default:
      return state;
  }
}

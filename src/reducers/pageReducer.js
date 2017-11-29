import {
  GET_PAGES,
  RETURN_PAGES
} from '../actions/pageActions/types';

const INITIAL_STATE = {
  loading: null,
  data: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PAGES:
      return {
        ...state,
        loading: true
      }
    case RETURN_PAGES:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    default:
      return state;
  }
}

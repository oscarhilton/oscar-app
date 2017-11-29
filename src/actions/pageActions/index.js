import axios from 'axios';
import { api } from '../api';

import {
  GET_PAGES,
  RETURN_PAGES
} from './types';

export const getPages = () => dispatch => {
  dispatch({ type: GET_PAGES });
};

export const returnPages = () => async dispatch => {
  const res = await axios.get(`${api}/wp-json/wp/v2/pages`);
  dispatch({ type: RETURN_PAGES, payload: res.data });
}

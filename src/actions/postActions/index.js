import axios from 'axios';
import { api } from '../api';

import {
  GET_POSTS,
  RETURN_POSTS
} from './types';

export const getPosts = () => dispatch => {
  dispatch({ type: GET_POSTS });
};

export const returnPosts = () => async dispatch => {
  const res = await axios.get(`${api}/wp-json/wp/v2/posts`);
  dispatch({ type: RETURN_POSTS, payload: res.data })
}

import React from 'react';
import moment from 'moment';
import Parser from 'html-react-parser';

const Post = ({ post }) => (
  <div>
    <h2>{post.title.rendered}</h2>
    <p>{moment(post.date).fromNow()}</p>
    {Parser(post.content.rendered)}
    <p>{post.acf.testing}</p>
    <div>{
      post.acf.video ? Parser(post.acf.video) : 'hello'
    }</div>
  </div>
);

export default Post;

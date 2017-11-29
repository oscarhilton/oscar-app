import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './Post';
import MainTemplate from './MainTemplate';

import { getPosts, returnPosts } from '../actions/postActions';

class Homepage extends Component {
  componentWillMount() {
    this.props.getPosts();
    this.props.returnPosts();
  }
  renderPosts() {
    const { loading, data } = this.props.posts;
    switch (loading) {
      case null:
      case true:
        return (<p>loading</p>);
      case false:
        return data.map((post) => (<Post post={post} />));
      default:
        return;
    }
  }
  render() {
    return (
      <MainTemplate>
        {this.renderPosts()}
      </MainTemplate>
    );
  }

}

const mapStateToProps = ({ posts }) => {
  return { posts };
};

export default connect(mapStateToProps, { getPosts, returnPosts })(Homepage);

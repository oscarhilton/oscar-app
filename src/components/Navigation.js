import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavItem from './NavItem';

class Navigation extends Component {
  renderItems() {
    const { loading, data } = this.props.pages;
    switch (loading) {
      case null:
      case true:
        break;
      case false:
        console.log(data, 'NAV!');
        return data.map((page) => (<NavItem key={page.id} item={page} />));
      default:
        return
    }
  }
  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }

}

const mapStateToProps = ({ pages }) => {
  return { pages };
};

export default connect(mapStateToProps)(Navigation);

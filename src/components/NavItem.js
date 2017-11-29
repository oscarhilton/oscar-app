import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ item }) => (
  <div>
    <Link to={item.slug}>{item.title.rendered}</Link>
  </div>
);

export default NavItem;

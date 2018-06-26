import React from 'react';
import { NavLink } from 'react-router-dom';

import './sidebar.css';


export const SideBar = (props) => {
  return (<div className="App-sidebar">
    <nav className="App-sidebar-nav">
      <NavLink to={`/products/`} className="App-sidebar-navlink" activeClassName="active">Product list</NavLink>
      <NavLink to={`/cart/`} className="App-sidebar-navlink" activeClassName="active">Cart</NavLink>
    </nav>
  </div>);
};

export default SideBar;

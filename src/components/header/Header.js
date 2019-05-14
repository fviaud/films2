import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class Header extends Component {

  render() {
    return (
      <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="/">MyMovie tag</a>
      <ul class="nav">
        <li class="nav-item">
        <NavLink to="/films" className="nav-link" activeClassName="active" > Home </NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/favoris" className="nav-link" activeClassName="active"> Favoris</NavLink>
        </li>
      </ul> 
    </nav>
    );
  }

}
import React, { Component } from 'react';
import Pineapple from '../../images/pineapple.svg';
import './NavBar.css';
export class NavBar extends Component {
  render() {
    return (
      <nav className="navigation">
        <div>
          <img 
            src={Pineapple} 
            alt="pineapple logo"
            className="logo"/>
        </div>
        <h1 className="heading-primary">Little List</h1>
        <i className="fas fa-home home-icon"></i>
      </nav>
    )
  }
}

export default NavBar;

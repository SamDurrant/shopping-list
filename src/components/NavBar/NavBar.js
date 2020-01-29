import React, { Component } from 'react';
import Pineapple from '../../images/pineapple.svg';
import styles from './NavBar.module.css';
export class NavBar extends Component {
  render() {
    return (
      <nav className={styles.navigation}>
        <div>
          <img 
            src={Pineapple} 
            alt="pineapple logo"
            className={styles.logo}/>
        </div>
        <h1 className={styles.headingPrimary}>Little List</h1>
        <i className={`fas fa-home ${styles.homeIcon}`}></i>
      </nav>
    )
  }
}

export default NavBar;

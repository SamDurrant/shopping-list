import React, { Component } from 'react';
import GroceryList from '../../components/GroceryList/GroceryList';
import Dashboard from '../../components/Dashboard/Dashboard';
import './Home.css';

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <GroceryList />
        <Dashboard />
      </div>
    )
  }
}

export default Home

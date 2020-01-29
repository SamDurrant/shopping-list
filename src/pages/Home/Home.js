import React, { Component } from 'react';
import GroceryList from '../../components/GroceryList/GroceryList';
import Dashboard from '../../components/Dashboard/Dashboard';
import './Home.css';

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <h3>Grocery List</h3>
        <GroceryList />
        <Dashboard />
      </div>
    )
  }
}

export default Home

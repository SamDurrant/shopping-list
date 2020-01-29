import React, { Component } from 'react';
import GroceryList from '../../components/GroceryList/GroceryList';
import Dashboard from '../../components/Dashboard/Dashboard';

export class Home extends Component {
  render() {
    return (
      <div>
        <GroceryList />
        <Dashboard />
      </div>
    )
  }
}

export default Home

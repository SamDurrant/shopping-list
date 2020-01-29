import React, { Component } from 'react';
import GroceryItem from '../GroceryItem/GroceryItem';
import './GroceryList.css';

export class GroceryList extends Component {
  render() {
    return (
      <div className="grocery-list">
          <GroceryItem />
          <GroceryItem />
          <GroceryItem />
      </div>
    )
  }
}

export default GroceryList;

import React, { Component } from 'react';
import GroceryItem from '../GroceryItem/GroceryItem';

export class GroceryList extends Component {
  render() {
    return (
      <div className="grocery-list">
        <h3 className="grocery-list-title">Grocery list</h3>
        <GroceryItem />
        <GroceryItem />
        <GroceryItem />
      </div>
    )
  }
}

export default GroceryList;

import React, { Component } from 'react';
import GroceryItem from '../GroceryItem/GroceryItem';

export class GroceryList extends Component {
  render() {
    return (
      <div>
        <h3>Grocery list</h3>
        <GroceryItem />
        <GroceryItem />
        <GroceryItem />
      </div>
    )
  }
}

export default GroceryList;

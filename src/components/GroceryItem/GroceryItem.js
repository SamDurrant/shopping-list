import React, { Component } from 'react';
import './GroceryItem.css';

export class GroceryItem extends Component {
  render() {
    return (
      <div className="grocery-item">
        <li>{this.props.itemValue}</li>
      </div>
    )
  }
}

export default GroceryItem; 
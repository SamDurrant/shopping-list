import React, { Component } from 'react';
import GroceryItem from '../GroceryItem/GroceryItem';
import './GroceryList.css';

export class GroceryList extends Component {
  render() {
    return (
      <div className="grocery-list">
          {
            // maps over list of items and displays a grocery item for each one
            this.props.allItems.map((item, i) => {
              return (
                <GroceryItem
                  key={`${item}${i}`} 
                  itemValue={item} />
              )
            })
          }
      </div>
    )
  }
}

export default GroceryList;
import React, { Component } from 'react';
import GroceryList from '../../components/GroceryList/GroceryList';
import Dashboard from '../../components/Dashboard/Dashboard';
import './Home.css';

export class Home extends Component {
  state = {
    userItemInput: '',
    items: ['bananas', 'apples', 'oatmeal', 'eggs', 'bread', 'chocolates']
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  addItemToList = () => {
    let allItems = [this.state.userItemInput, ...this.state.items];
    this.setState({
      userItemInput: '',
      items: allItems
    })
  }

  clearItemsFromList = () => {
    this.setState({
      items: []
    })
  }

  render() {
    return (
      <div className="home">
        <h3>Grocery List</h3>
        <GroceryList 
          allItems={this.state.items}/>
        <Dashboard 
          change={this.handleChange}
          inputValue={this.state.userItemInput}
          addItem={this.addItemToList}
          clearList={this.clearItemsFromList}/>
      </div>
    )
  }
}

export default Home
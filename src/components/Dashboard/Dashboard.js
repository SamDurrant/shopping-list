import React, { Component } from 'react';
import './Dashboard.css';

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <input 
          className="input-height" 
          type="text" 
          placeholder="add item"
          id="userItemInput"
          value={this.props.inputValue}
          onChange={this.props.change}/>
        <i className="fas fa-plus-circle add-item"
          onClick={this.props.addItem} />
        <button 
          className="clear-list"
          onClick={this.props.clearList}>clear list</button>
      </div>
    )
  }
}

export default Dashboard;
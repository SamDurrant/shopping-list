import React, { Component } from 'react';
import './Dashboard.css';

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <input className="input-height" type="text" placeholder="add item"/>
        <button className="input-height">Add</button>
      </div>
    )
  }
}

export default Dashboard;

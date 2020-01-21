import React from 'react';
import ReactDOM from 'react-dom';

function Test() {
  return (
    <div className="header">
      <h1>Shopping List Extraordinaire!</h1>
    </div>
  )
}

ReactDOM.render(<Test/>, document.querySelector("#root"));
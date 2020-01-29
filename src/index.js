import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Shopping List Test</h1>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.querySelector("#root"));
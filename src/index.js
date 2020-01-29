import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar/NavBar';
<<<<<<< HEAD
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
=======
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './index.css';
>>>>>>> 7dd8920b04f42b376a4b6877037ac45ff659c1a1


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
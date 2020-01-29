import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './index.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <Footer />
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.querySelector("#root"));
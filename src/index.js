import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './index.css';


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

ReactDOM.render(<App/>, document.querySelector("#root"));
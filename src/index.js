import React from 'react';
import ReactDOM from 'react-dom';


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
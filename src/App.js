import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import router from './routes.js'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
          <Nav />
          {router}
      </div>
    );
  }
}

export default App;

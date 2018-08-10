import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav/>
        </header>
        <p className="App-intro">
          <Auth/>
          <Dashboard/>
          <Form/>
          <Post/>
        </p>
      </div>
    );
  }
}

export default App;

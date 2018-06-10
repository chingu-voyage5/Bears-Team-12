import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>This is a header!</h1>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Order from './components/app/Order';
import Settings from './components/app/Settings';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div>
            <Route exact path="/order" component={Order} />
            <Route exact path="/settings" component={Settings} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

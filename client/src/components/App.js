import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import Menu from './Menu';
import Orders from './Orders';
import ItemNew from './ItemNew';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/menu" component={Menu} />
            <Route path="/menu/new" component={ItemNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

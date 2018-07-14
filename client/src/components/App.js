import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Landing from './Landing';
import Menu from './Menu';
import Orders from './orders/Orders';
import OrderReceipt from './orders/OrderReceipt';
import ItemNew from './items/ItemNew';
import DrinksMenu from './drinks/DrinksMenu';
import DrinkForm from './drinks/DrinkForm';
import Statistics from './Statistics';

class App extends Component {
  render() {
    const DefaultContainer = () => (
      <div>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div>
          <Route path="/orders" component={Orders} />
          <Route exact path="/menu" component={Menu} />
          <Route path="/menu/new" component={ItemNew} />
          <Route exact path="/drinks" component={DrinksMenu} />
          <Route path="/drinks/new" component={DrinkForm} />
          <Route path="/statistics" component={Statistics} />
        </div>
      </div>
    );

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/orders/:id" component={OrderReceipt} />
          <Route component={DefaultContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

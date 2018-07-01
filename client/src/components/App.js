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

class App extends Component {
  render() {
    const ReceiptContainer = () => (
      <Route 
        path="/orders/:id" 
        component={OrderReceipt} />
    );

    const DefaultContainer = () => (
      <div>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div>
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/menu" component={Menu} />
          <Route path="/menu/new" component={ItemNew} />
          <Route exact path="/drinks" component={DrinksMenu} />
          <Route exact path="/drinks/new" component={DrinkForm} />
        </div>
      </div>
    )

    return (
      
        <BrowserRouter>
          <Switch>
            
              <Route 
                path="/orders/:id" 
                component={OrderReceipt} />
              <Route component={DefaultContainer}/>
            
          </Switch>
        </BrowserRouter>
      
    );
  }
}

export default App;

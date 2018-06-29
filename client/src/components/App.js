import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Landing from "./Landing";
import Menu from "./Menu";
import Orders from "./orders/Orders";
import ItemNew from "./items/ItemNew";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div>
              <Route exact path="/orders" component={Orders} />
              <Route exact path="/menu" component={Menu} />
              <Route path="/menu/new" component={ItemNew} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import User from "./User";
import NotMatch from "./NotMatch";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
        <Switch>           
            <Route exact path='/' component={Home} />
            <Route path='/12' component={User} />
            <Route path='/about' component={User} />
            <Route component={NotMatch} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

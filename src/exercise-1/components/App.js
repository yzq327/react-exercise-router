import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import MyProfile from '../components/MyProfile'
import Home from '../components/Home'
import AboutUs from '../components/AboutUs'
import Products from '../components/Products'
import Details from '../components/Details'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
            <nav className='header'>
                <ul className='nav nav1'>
                    <li className='aboutus'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='products'>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li>
                      <Link to='/myprofile'>My profile</Link>
                    </li>
                    <li >
                      <Link to='/aboutUs'>About us</Link>
                    </li>                        
                </ul>
            </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/products/:id' component={Details} />
            <Route exact path='/myprofile' component={MyProfile} />
            <Route path='/aboutUs' component={AboutUs} />            
            <Route path='/goods' component={Products} />
            <Route component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

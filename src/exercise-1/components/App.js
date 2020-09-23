import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import MyProfile from '../components/MyProfile'
import Home from '../components/Home'
import AboutUs from '../components/AboutUs'

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
            <Route path='/myprofile' component={MyProfile} />
            <Route path='/aboutUs' component={AboutUs} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

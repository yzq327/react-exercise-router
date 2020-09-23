import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Details from '../components/Details'

class Products extends Component{
    state = {
        id:''
    }
    handleChange = (event) => {       
        this.setState({
            [event.target.name]: event.target.value
        })         
       const resultid=event.target.name;
    }
    render () {
        return <form className = 'productsform'>
            <label className="allProduct">All Products</label>
            <button name='id' className="productInfo" 
                    onChange={this.handleChange}
                    value='1'>Bicycle</button>                    
            <button name='id' className="productInfo"
                    onChange={this.handleChange}
                    value='2'>Tv</button>
            <button name='id' className="productInfo"
                    onChange={this.handleChange}
                    value='3'>Pencle</button>
            <Router>    
               <Route path='/products/resultid' component={Details} />               
            </Router>
        </form>         
    }
}
export default Products;
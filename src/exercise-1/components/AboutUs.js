import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import '../styles/App.css';

export default class MyProfile extends Component{
    render(){
        return (
            <div className='myProfile'> 
                <p>Company: Thoughtworks Local</p>     
                <p>Location: Xian</p>   
                <p className='secondp'>For more information, please</p>     
                <p>view our <label><Link to='/'>website</Link></label></p>                                      
            </div>   
                               
        );
    }
}
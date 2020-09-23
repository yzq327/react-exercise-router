import React, { Component } from 'react';
import '../styles/App.css';

export default class Header extends Component{
    render(){
        return (           
            <nav className='header'>
                <ul>
                    <li className='aboutus'>Home</li>
                    <li>My profile</li>
                    <li >About us</li>                        
                </ul>
            </nav>
        );
    }
}
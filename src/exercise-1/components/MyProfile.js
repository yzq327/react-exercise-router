import React, { Component } from 'react';
import '../styles/App.css';

export default class MyProfile extends Component{
    render(){
        return (
            <div className='myProfile'> 
                <p>UserName: YZQ</p>     
                <p>Gender:female</p>   
                <p>Work: IT Industry</p>     
                <p>Website:'/myProfile'</p>                            
            </div>                       
        );
    }
}
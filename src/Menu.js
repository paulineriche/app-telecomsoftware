import React, { Component } from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';

import FirstComponent from './Composants/FirstComponent';

class Menu extends Component {

  state = {
    presentation : [
      {
        id : 1, 
        name : 'Giacomini',
        firstname : 'Melissa'
      },
      {
        id : 2, 
        name : 'Sarfati',
        firstname : 'Matthieu'
      },
      {
        id : 3, 
        name : 'Kintrup',
        firstname : 'Lisa'
      },
      {
        id : 4, 
        name : 'Riche',
        firstname : 'Pauline'
      },
    ]
  }


  render(){
    return (
      <div className="Menu">           
        <header className="App-header">
          <h2> BTC Radio Stream </h2>
          <FirstComponent names = {this.state.presentation}/>
        </header>
      </div> 
    );
  }
} 

export default Menu; 
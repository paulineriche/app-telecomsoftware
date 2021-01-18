import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import  'bootstrap/dist/css/bootstrap.min.css';

import fire from './config/fire';

import ListMusic from './Composants/MusicList'
import Header from './Composants/Header'
import Menu from './Menu'
import Inscription from './Composants/Inscription'
import Paiement from './Composants/Paiement'



class App extends Component {

  constructor(){
    super();
    this.state={
      user:null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user});
      } 
      else{
        this.setState({user:null});
      }
    });
  }

  render(){
    return (
        <Router>
          <Header/>
           <Route path ="/" exact component = {Menu} />
           <Route path="/ListMusic" component={ListMusic} />
           <Route path="/Inscription" component={Inscription} />
           <Route path="/Paiement" component={Paiement} />
        </Router>
    );
  }
} 

export default App; 
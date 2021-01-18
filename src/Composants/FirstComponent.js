import React, { Component } from 'react';
import fire from '../config/fire';
import axios from 'axios';

class FirstComponent extends Component {

    constructor(){
        super();
        this.state = { 

        }

    }

    logout= () =>{
        fire.auth().signOut();
    }


    render(){
        return(
            <React.Fragment>

                <p> Music streaming platform in peer to peer  </p>
                <br/>
                <br/><br/>
                <iframe title= "myFrame" class= "frame" src="http://88.140.197.167/public/radio_bitcoin/embed" frameborder="0" allowtransparency="true" ></iframe>
                <p>Music title  </p>
                <input type ="text" name="musics"/>
                 <button>Enter</button>
                 <br/><br/> 
                
                
                <button onClick={this.logout}>logout</button>
                
            </React.Fragment>
            
        )
    }
}
 
export default FirstComponent;
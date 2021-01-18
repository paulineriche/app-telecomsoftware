import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render(){
        return(
                <nav className= "navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0" >
                    <a href="/" className="navbar-brand">Home</a>
                    <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                        <a href="/ListMusic" className="nav-link">List of the stations available </a>
                        </li>
                        <li className="navbar-item">
                        <a href="/Inscription" className="nav-link">Artist</a>
                        </li>
                        <li className="navbar-item">
                        <a href="/Paiement" className="nav-link">Payment</a>
                        </li>
                    </ul>
                    </div>
                </nav>
        )
    }
}
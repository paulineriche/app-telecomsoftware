import React, {useState, Component} from 'react';
import '../App.css';

import fire from '../config/fire';


export default class Inscription extends Component {
    constructor(props){
        super(props)
        this.state={
            email: '',
            password:'',
            fireErrors:'',
            formTitle:'Connection',
            loginBtn: true
        };
    }

    handleChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }

    login=e=>{
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error)=>{
                this.setState({fireErrors: error.message})
            });
    }

    register=e=>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error)=>{
                this.setState({fireErrors: error.message})
            });
    }

    getAction = action =>{
        if(action === 'reg'){
            this.setState({formTitle:"Inscription", loginBtn:false, fireErrors:''});}
        else{
            this.setState({formTitle:"Connection", loginBtn:true, fireErrors:''});
        }
    }

    render(){


        let errorNotification=this.state.fireErrors ?
            (<div classname="Error">{this.state.fireErrors}</div>) :null;

        let submitBtn = this.state.loginBtn?
            (<input className="loginBtn" type="submit" onClick={this.login} value="Enter"/>):
            (<input className="loginBtn" type="submit" onClick={this.register} value="Sign up"/>)

        let login_register = this.state.loginBtn ?
            (<button className="registerBtn" onClick={()=> this.getAction('reg')}>Inscription</button>):
            (<button className="registerBtn" onClick={()=> this.getAction('login')}>Connexion</button>)
        

        return(        
          <div className="form_block">
            <div id="title">{this.state.formTitle}</div>
            <div clasName="body">
                {errorNotification}
                <form>
                    <input type="text"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email"
                    name="email"/>

                    <input type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Password"
                    name="password"/>

                    {submitBtn}
                </form>
                    {login_register}
            </div>
          </div>
        )
    }

/*
    state = {
        nom :'',
        prenom : '',
        statut : '',
        items : []
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            nom : '',
            prenom : '',
            statut : '',
            items:[...this.state.items, {nom:this.state.nom, prenom:this.state.prenom, statut:this.state.statut}]
        });
    }

    renderCard = () => {
        return this.state.items.map((item, index) => {
            return(
                <div className="card" key = {index}>
                    <div className="card-body">
                        <h3>Utilisateur</h3>
                        <hr />
                            <p> Prenom : {item.prenom}</p>
                            <p> Nom : {item.nom}</p>
                            <p> Statut : {item.statut}</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        return(
            <div>
                <div className="card my-3">
                    <div className="card-header"> S'inscrire</div>
                    <div className="card-body">

                            <form onSubmit = {this.onSubmit}>


                                <div className="form-group">
                                    <label htmlFor="nom">Nom</label>
                                    <input type="text"
                                        className="form-control form-control-lg"
                                        name="nom"
                                        onChange={this.onChange}
                                        value={this.state.nom}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="prenom">Prenom</label>
                                    <input type="text"
                                        className="form-control form-control-lg"
                                        name="prenom"
                                        onChange={this.onChange}
                                        value={this.state.prenom}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="statut">Statut</label>
                                    <input type="text"
                                        className="form-control form-control-lg"
                                        name="statut"
                                        onChange={this.onChange}
                                        value={this.state.statut}
                                    />
                                </div>

                                <button className="btn btn-primary btn-block"> Entrer!</button>
                                
                            </form>

                        </div>
                </div>
                {this.renderCard()}
            </div>
        )
    }
    */
}

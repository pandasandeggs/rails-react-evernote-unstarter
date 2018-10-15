import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main'
import Login from './Components/Login'

import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notes: [],
      currentUser: {},
      displayLogin: true
    }
  }

  componentDidMount(){
    const token = localStorage.token
    fetch('http://localhost:3000/api/v1/profile',{
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }) .then(resp => resp.json())
        .then(data => {
          if(!data.error){
            this.setState({
              currentUser: data
            })
          }
        })
  }

  getUserNotes = () => {
    fetch('http://localhost:3000/notes')
      .then(resp => resp.json())
      .then(data => {this.setState({notes: data})
    });
  }
  
  login = (username, password) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if(!data.error){
          getUserNotes()
          localStorage.token = data.token;
          this.setState({
            currentUser: data.user,
            displayLogin: false,
            notes: data.user.notes
          })
        } else {
          this.setState({
            loginError: data.error
          })
        }
      })
  }

  render() {
    return (
        <div>
          {!this.state.currentUser.id ? <Login login={this.login}/>
          : <h5>Hello {this.state.currentUser.username}!</h5> }
          <Header />
            {this.state.notes.length > 0 ?
              <Main notes={this.state.notes}/> : ''
            }
        </div>

    );
  }

}

export default App;

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
          /* Won't give me data unless I'm loggin in, but login is below. Is this needed? */
          if(!data.error){
            this.setState({
              currentUser: data
            })
          }
        })
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
        /* data is the user object with token and nested notes */
        if(!data.error){
          localStorage.token = data.jwt;
          this.setState({
            currentUser: data.user,
            displayLogin: false
          })
        } else {
          this.setState({
            loginError: data.error
          })
        }
      }).then( () => {
        const token = localStorage.token
        fetch('http://localhost:3000/notes/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then(resp => resp.json())
          .then(data => {this.setState({notes: data})
          /* data is a message that asks me to login even after I have logged in */
        })

      })
  }



  render() {
    console.log("get the id", this.state.currentUser)
    return (
        <React.Fragment>
          <Header user={this.state.currentUser}/>
            <div>
            {this.state.notes.length > 0 && this.state.currentUser.id === this.state.currentUser.notes[0].user_id ?
              <Main notes={this.state.notes}/>
              : null
              }
            </div>
            <div>{!this.state.currentUser.id ?
              <Login login={this.login}/>
            :<Main notes={this.state.notes}/>
              }
            </div>
        </React.Fragment>
    );
  }

}

export default App;

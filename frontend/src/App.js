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

  createNote = (noteObj) => {
    this.setState({
      notes: [...this.state.notes, noteObj]
    })
  }

  updateNote = (noteObj) => {
    const note = this.state.notes.find( note => note.id === noteObj.id)
    const oldNoteIndex = this.state.notes.indexOf(note)
    this.state.notes.splice(oldNoteIndex, 1, noteObj)
    this.setState({
      notes: [...this.state.notes]
    })
  }

  deleteNote = (noteObj) => {
    const note = this.state.notes.find( note => note.id === noteObj.id)
    const oldNoteIndex = this.state.notes.indexOf(note)
    this.state.notes.splice(oldNoteIndex,1)
    this.setState({
      notes: [...this.state.notes]
    })
  }

  render() {
    return (
        <React.Fragment>
          <Header user={this.state.currentUser}/>
            <div>
            {this.state.notes.length > 0 && this.state.currentUser.id === this.state.currentUser.notes[0].user_id ?
              <Main notes={this.state.notes} editedNote={this.updateNote} createdNote={this.createNote} deletedNote={this.deleteNote}/>
              : <Login login={this.login}/>
              }
            </div>
        </React.Fragment>
    );
  }

}

export default App;

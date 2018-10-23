import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notes: [],
      currentUser: null,
      displayLogin: true,
      searchResults: [],
      displaySignup: true,
    }
  }

  componentDidMount(){
    const token = localStorage.token
    if (token) {
      fetch('http://localhost:3000/api/v1/profile',{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }) .then(resp => resp.json())
          .then(data => {
            if(!data.error){
              this.setState({
                currentUser: data,
                displayLogin: false,
                displaySignup: false
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
            })

          })
    }

  }

  signup = (username, password, about) => {
      localStorage.clear()
      fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
        about: about
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(resp => resp.json())
      .then(data => {
        if(!data.error){
          localStorage.token = data.token;
          this.setState({
            currentUser: data.user,
            displaySignup: false
          })
        } else {
          console.log("User was not successfully created.")
        }
      })
  }

  login = (username, password) => {
    localStorage.clear()
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
        /* data = user object with token and nested notes */
        if(!data.error){
          localStorage.token = data.jwt;
          this.setState({
            currentUser: data.user,
            displayLogin: false,
            displaySignup: false
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

  deleteNote = (id) => {
    const note = this.state.notes.findIndex(note => note.id === id)
    this.state.notes.splice(note,1)
    this.setState({
      notes: [...this.state.notes]
    })
  }

  handleSearchSubmit = searchTerm => {
    const token = localStorage.token
    fetch(`http://localhost:3000/notes/${searchTerm}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(resp => resp.json())
      .then(data => this.setState({
        searchResults: data
      }))

  }

  handleLogout = e => {
    localStorage.clear()
    this.setState({
      currentUser: null
    })
  }

  render() {
    const { currentUser, displayLogin, displaySignup} = this.state;
    return (
            <div>
            { displaySignup ? <SignUp signup={this.signup}/> : displayLogin }
            { !displayLogin ?
            <div>
            <Header user={currentUser} handleSearchSubmit= {this.handleSearchSubmit} handleLogout={this.handleLogout}/>
            <Main notes={this.state.notes} editedNote={this.updateNote} createdNote={this.createNote} deletedNote={this.deleteNote} searchResults={this.state.searchResults} handleSearchSubmit= {this.handleSearchSubmit}  />
            </div>
            : <Login login={this.login}/>
            }
            </div>
    );
  }

}

export default App;

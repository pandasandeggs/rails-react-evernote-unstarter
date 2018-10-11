import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main'

import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notes: [],
      displayed: false
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/notes')
      .then(resp => resp.json())
      .then(data => {this.setState({notes: data})
    });
  }

  handleClick = (e) => {
    //fill this in
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main notes={this.state.notes}/>
      </div>
    );
  }

}

export default App;

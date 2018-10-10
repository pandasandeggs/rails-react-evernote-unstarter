import React, { Component } from 'react';
import Header from './Components/Header';
import NoteList from './Components/NoteList'
import SearchBar from './Components/SearchBar'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/notes')
      .then(resp => resp.json())
      .then(data => {this.setState({notes: data})
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <NoteList notes={this.state.notes}/>
      </div>
    );
  }

}

export default App;

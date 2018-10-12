import React, { Component } from 'react';
import NoteList from '../Components/NoteList'
import Note from '../Components/Note'
import NewNoteButton from '../Components/NewNoteButton'
import NewNoteForm from '../Components/NewNoteForm'
import '../App.css';

class Main extends Component {

  state = {
    chosenNote: {}
  }

  handleClick = note => {
    console.log(note)
    this.setState({
      chosenNote: note
    })
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <NoteList className="col-sm-4" notes={this.props.notes} handleClick={this.handleClick}/>
          <Note className="col-sm-8" title={this.state.chosenNote.title} body={this.state.chosenNote.body}/>
          <br/>
          <NewNoteButton className="new-button" />
          <NewNoteForm />
        </div>
      </div>
    );
  }

}

export default Main;

import React, { Component } from 'react';
import NoteList from '../Components/NoteList'
import Note from '../Components/Note'
import NewNoteButton from '../Components/NewNoteButton'
import NewNoteForm from '../Components/NewNoteForm'
import '../App.css';

class Main extends Component {

  state = {
    chosenNote: {},
    displayNewForm: false
  }

  handleNoteClick = note => {
    console.log(note)
    this.setState({
      chosenNote: note,
      displayNewForm: false
    })
  }

  handleNewClick = e => {
    this.setState({
      chosenNote: {},
      displayNewForm: true
    })

  }


  render() {

    const {displayNewForm} = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <NoteList className="col-sm-4" notes={this.props.notes} handleNoteClick={this.handleNoteClick}/>
          <Note className="col-sm-8" title={this.state.chosenNote.title} body={this.state.chosenNote.body}/>
          <br/>
          <NewNoteButton className="new-button" handleNewClick={this.handleNewClick} />
          {displayNewForm ? <NewNoteForm /> : null}
        </div>
      </div>
    );
  }

}

export default Main;

import React, { Component } from 'react';
import NoteList from '../Components/NoteList'
import Note from '../Components/Note'
import NewNoteButton from '../Components/NewNoteButton'
import NewNoteForm from '../Components/NewNoteForm'
import '../App.css';

class Main extends Component {

  state = {
    chosenNote: {}/*this.props.notes[0]*/,
    displayNewForm: false
  }

  handleNoteClick = note => {
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
          <div className="col-sm-4">
            <NoteList notes={this.props.notes} handleNoteClick={this.handleNoteClick}/>
          </div>
          <div className="col-sm-8">
            <Note id={this.state.chosenNote.id} title={this.state.chosenNote.title} body={this.state.chosenNote.body} editedNote={this.props.editedNote} deletedNote={this.props.deletedNote}/>
            <br/>
            <NewNoteButton className="new-button" handleNewClick={this.handleNewClick} />
            {displayNewForm ? <NewNoteForm createdNote={this.props.createdNote}/> : null}
          </div>
        </div>
      </div>
    );
  }

}

export default Main;

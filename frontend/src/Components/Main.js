import React, { Component } from 'react';
import NoteList from '../Components/NoteList'
import Note from '../Components/Note'
import NewNoteButton from '../Components/NewNoteButton'
import NewNoteForm from '../Components/NewNoteForm'
import EditNoteForm from '../Components/EditNoteForm'
import '../App.css';

class Main extends Component {

  state = {
    chosenNote: null,
    displayNewForm: false,
    displayEditForm: false
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
      displayNewForm: !this.state.displayNewForm
    })

  }

  showNewNote = note => {
    this.setState({
      chosenNote: note,
    })
  }

  handleEditClick = note => {
    this.setState({
      chosenNote: note,
      displayEditForm: !this.state.displayEditForm
    })

  }

  handleRemoveChosenNote = () =>  {
    this.setState({
      chosenNote: null
    })
  }

  render() {
    const { displayNewForm, chosenNote, displayEditForm } = this.state;
    const { notes, searchResults, handleSearchSubmit } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            { notes.length ? <NoteList notes={notes} searchResults={searchResults} handleSearchSubmit= {handleSearchSubmit} handleNoteClick={this.handleNoteClick} /> : null}
          </div>
          <div className="col-sm-8">
            {chosenNote ? <Note id={this.state.chosenNote.id} title={this.state.chosenNote.title} body={this.state.chosenNote.body} editedNote={this.props.editedNote} handleEditClick={this.handleEditClick}
            handleNewClick={this.handleNewClick} deletedNote={this.props.deletedNote}
            
            handleRemoveChosenNote= {this.handleRemoveChosenNote}/> : null }
            <br/>
            <NewNoteButton className="new-button" handleNewClick={this.handleNewClick} showNewNote={this.showNewNote} />
            {displayNewForm ? <NewNoteForm createdNote={this.props.createdNote} handleNewClick={this.handleNewClick} showNewNote={this.showNewNote}/> : ''}
            {displayEditForm ? <EditNoteForm {...this.state.chosenNote} editedNote={this.props.editedNote} handleEditClick={this.handleEditClick} /> : null}
          </div>
        </div>
      </div>
    );
  }

}

export default Main;

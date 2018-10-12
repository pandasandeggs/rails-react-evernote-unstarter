import React, { Component } from 'react';
import NoteList from '../Components/NoteList'
import Note from '../Components/Note'
import NewNoteButton from '../Components/NewNoteButton'
import '../App.css';

class Main extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <NoteList className="col-sm-4" notes={this.props.notes}/>
          <Note className="col-sm-8" />
          <br/>
          <NewNoteButton className="new-button"/>
        </div>
      </div>
    );
  }

}

export default Main;

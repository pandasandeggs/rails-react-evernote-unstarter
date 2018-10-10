import React, { Component } from 'react';
import Note from '../Components/Note'

class NoteList extends Component {

  getNotes = () => {
    this.props.notes = (note => {
      <Note className="content" note={note} />
    })
  }

  render() {
    return (
      <div>
        {this.getNotes}
      </div>
    );
  }
}

export default NoteList;

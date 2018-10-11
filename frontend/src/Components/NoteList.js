import React, { Component } from 'react';
import NoteCard from '../Components/NoteCard'

class NoteList extends Component {

  getNotes(){
   return this.props.notes.map( note =>
      <div key={note.id}>
        <div>
          <NoteCard title={note.title} body={note.body} />
          ___________________

        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.getNotes()}
      </div>
    )
  }
}

export default NoteList;

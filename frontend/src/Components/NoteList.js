import React, { Component } from 'react';
import NoteCard from '../Components/NoteCard'

class NoteList extends Component {

  getNotes(){
   return this.props.notes.map( note =>
      <div key={note.id} onClick={ e => this.props.handleNoteClick(note)} className="container-fluid">
        <div className="row content">
          <div className="col-sm-3 sidenav">
            <NoteCard title={note.title} body={note.body}/>
            ___________________
          </div>
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

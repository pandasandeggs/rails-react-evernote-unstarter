import React, { Component } from 'react';
import NoteCard from '../Components/NoteCard'

class NoteList extends Component {

  getNotes(){
    if (this.props.searchResults.length > 0){
      return this.props.searchResults.map( search =>
         <div key={search.id} onClick={ e => this.props.handleNoteClick(search)} className="container-fluid">
           <div className="row content">
             <div className="col-sm-4 sidenav">
               <NoteCard title={search.title} body={search.body}/>
             </div>
           </div>
         </div>
       );
    } else {
   return this.props.notes.map( note =>
      <div key={note.id} onClick={ e => this.props.handleNoteClick(note)} className="container-fluid">
        <div className="row content">
          <div className="col-sm-4 sidenav">
            <NoteCard title={note.title} body={note.body}/>
          </div>
        </div>
      </div>
      );
    }
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

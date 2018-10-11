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
          <NewNoteButton />
        </div>
      </div>
    );
  }

}

export default Main;

// <div class="container-fluid">
//   <h1>Hello World!</h1>
//   <p>Resize the browser window to see the effect.</p>
//   <p>The columns will automatically stack on top of each other when the screen is less than 768px wide.</p>
//   <div class="row">
//     <div class="col-sm-4" style="background-color:lavender;">.col-sm-4</div>
//     <div class="col-sm-8" style="background-color:lavenderblush;">.col-sm-8</div>
//   </div>
// </div>

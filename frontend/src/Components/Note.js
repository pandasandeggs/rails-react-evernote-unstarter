import React, { Component } from 'react';

class Note extends Component {

  render() {
    return (
      <div className="Note">
        <div className="sidebar">
          <div className="row">
            <div className="col-sm-4">
              <h3>{this.props.note.title}</h3>
              <p>{this.props.note.body}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Note;

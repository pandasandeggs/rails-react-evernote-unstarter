import React, { Component } from 'react';

class Note extends Component {


  render() {
    return (
      <div className="col-sm-8">
        <h3 className="note-title">{this.props.title} </h3>
        <p className="note-body">{this.props.body}</p>
        <br/>
        <i className="far fa-edit"></i><br/>
        <i className="far fa-envelope"></i>
      </div>
    )
  }
}

export default Note;

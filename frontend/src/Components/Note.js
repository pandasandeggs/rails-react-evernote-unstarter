import React, { Component } from 'react';

class Note extends Component {


  render() {
    console.log("props in Note", this.props)
    return (
      <div className="col-sm-8">
        <h3 className="note-title">{this.props.title} </h3>
        <p className="note-body">{this.props.body}</p>
        <br/>
        <button className="main-button1">Edit</button>
        <button className="main-button2">Share</button>
      </div>
    )
  }
}

export default Note;

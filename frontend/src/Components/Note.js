import React, { Component } from 'react';

class Note extends Component {


  render() {
    console.log("passed to Note", this.props)
    return (
      <div className="col-sm-8">
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
        <br/>
        <button>Edit</button>
        <button>Share</button>
      </div>
    )
  }
}

export default Note;

import React, { Component } from 'react';


class NoteCard extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
        <br/>
      </div>
    )
  }
}

export default NoteCard;

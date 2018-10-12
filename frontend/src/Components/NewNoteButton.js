import React, { Component } from 'react';

class NewNoteButton extends Component {

  render() {
    return (
      <div className="new-button">
        <button onClick={e => this.props.handleNewClick(e.target)} >New Letter</button>
      </div>
    )
  }
}

export default NewNoteButton;

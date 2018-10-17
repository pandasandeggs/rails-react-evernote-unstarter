import React, { Component } from 'react';
import EditNoteForm from '../Components/EditNoteForm'

class Note extends Component {

  state = {
    displayEditForm: false
  }

  showEdit = (e) => {
    this.setState({
      displayEditForm: true
    })
  }

  render() {
    const {displayEditForm} = this.state;

    return (
      <div className="col-sm-8">
        <h3 className="note-title">{this.props.title} </h3>
        <p className="note-body">{this.props.body}</p>
        <br/>
        <button onClick={e => this.showEdit(e.target)}>Edit Letter</button>
        {displayEditForm ? <EditNoteForm id={this.props.id} title={this.props.title} body={this.props.body}/> : null}
        <button>Share Letter</button>
      </div>
    )
  }
}

export default Note;

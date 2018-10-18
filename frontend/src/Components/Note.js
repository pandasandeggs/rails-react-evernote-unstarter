import React, { Component } from 'react';
import EditNoteForm from '../Components/EditNoteForm'

class Note extends Component {

  state = {
    title: this.props.title,
    body: this.props.body,
    displayEditForm: false
  }

  handleEdit = e => {
    this.setState({
      displayEditForm: true
    })
  }

  handleDelete = e => {
    const token = localStorage.token
    fetch(`http://localhost:3000/notes/${this.props.id}`, {
      method: "DELETE",
      headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }).then(resp => this.props.deletedNote(resp))
  }

  render() {
    const {displayEditForm} = this.state;

    return (
      <div className="col-sm-8">
        <h3 className="note-title">{this.props.title} </h3>
        <p className="note-body">{this.props.body}</p>
        <br/>
        <button onClick={e => this.handleEdit(e.target)}>Edit Letter</button><br/>
        {displayEditForm ? <EditNoteForm id={this.props.id} title={this.props.title} body={this.props.body} editedNote={this.props.editedNote}/> : null}
        <button>Share Letter</button><br/>
        <button onClick={e => this.handleDelete(e.target)}>Delete Letter</button><br/>
      </div>
    )
  }
}

export default Note;

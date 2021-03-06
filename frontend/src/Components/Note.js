import React, { Component } from 'react';
import EditNoteForm from '../Components/EditNoteForm'

class Note extends Component {

  state = {
    id: this.props.id,
    title: this.props.title,
    body: this.props.body
  }


  shouldComponentUpdate(nextProps, nextState){
    const { id, title, body } = nextProps;
    if (nextState.body !== body || nextState.title !== title || nextState.id !== id) {
      this.setState({ id, title, body });
      return true;
    }

    return false;
  }

  handleDelete = () => {
    const token = localStorage.token
    fetch(`http://localhost:3000/notes/${this.props.id}`, {
      method: "DELETE",
      headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
      this.props.deletedNote(this.props.id);
      this.props.handleRemoveChosenNote();
  }

  render() {
    const { title, body } = this.state;

    return (
      <div>
      <div className="col-sm-8">
        <h3 className="note-title">{this.props.title}</h3>
        <p className="note-body">{this.props.body}</p>
        <br/>
        <button onClick={() => this.props.handleEditClick(this.state)}>Edit Letter</button><br/>
        <button>Share Letter</button><br/>
        <button onClick={this.handleDelete}>Delete Letter</button><br/>
      </div>
      </div>
    )
  }
}

export default Note;

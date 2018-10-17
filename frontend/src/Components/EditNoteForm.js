import React, { Component } from 'react';

class EditNoteForm extends Component {

  state = {
    title: this.props.title,
    body: this.props.body,
  }

  handleEditTitle = e => {this.setState({title: e.target.value})}

  handleEditBody = e => {this.setState({body: e.target.value })}

  handleEdit = e => {
    const token = localStorage.token
    e.preventDefault();
    fetch(`http://localhost:3000/notes/${this.props.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body
      })
    }).then(resp => resp.json())
      .then(data => console.log("the data", data))
  }

  render(){
    const { title, body } = this.state;
    return (
      <div className="col-sm-8 mx-auto">
        <div className="card">
          <div className="card-header">Edit Letter</div>
          <div className="card-body">
            <form className="form-group" onSubmit={this.handleEdit}>
              <label>
              Title:
                <input className="form-control form-control-md" type="text" name="Title" value={title} onChange={this.handleEditTitle}/>
              </label>
              <br/><br/>
              <label>
              Letter:
                <textarea className="form-control form-control-lg" value={body} onChange={this.handleEditBody}/>
              </label>
              <br/><br/><br/>
                <input className="far fa-save" type="submit" value="Save Letter" />
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default EditNoteForm;

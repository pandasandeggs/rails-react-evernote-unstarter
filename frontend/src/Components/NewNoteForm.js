import React, { Component } from 'react';

class NewNoteForm extends Component {

  state = {
    title: '',
    body: '',
    hideNewForm: false
  }

  handleTitleChange = e => this.setState({title: e.target.value});

  handleBodyChange = e => this.setState({body: e.target.value});

  handleSubmit = (e) => {
    const token = localStorage.token
    e.preventDefault(); /* Do I need to take this out so it renders immediately? */
    fetch('http://localhost:3000/notes', {
      method: "POST",
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
      .then(data => this.props.createdNote(data))

    this.setState({
      hideNewForm: true
    })
  }

  render() {
    const { title, body, hideNewForm} = this.state;
    return (
      <div>
        {hideNewForm ? null :
        <div className="col-sm-8">
          <div className="card mb-3">
            <div className="card-header">Create New Letter</div>
            <div className="card-body">
              <form className="form-group" onSubmit={this.handleSubmit}>
                <label>
                Title:
                  <input className="form-control form-control-md" type="text" name="Title" value={title} onChange={this.handleTitleChange}/>
                </label>
                <br/><br/>
                <label>
                Letter:
                  <textarea className="form-control form-control-lg" value={body} onChange={this.handleBodyChange}/>
                </label>
                <br/><br/><br/>
                  <input className="far fa-save" type="submit" value="Save Letter" />
              </form>
            </div>
          </div>
        </div>
        }
      </div>
    )
  }
}

export default NewNoteForm;

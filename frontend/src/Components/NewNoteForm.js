import React, { Component } from 'react';

class NewNoteForm extends Component {

  state = {
    title: '',
    body: ''
  }

  handleTitleChange = e => this.setState({title: e.target.value});
  handleBodyChange = e => this.setState({body: e.target.value});
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e, this.state);
  }

  render() {
    const { title, body } = this.state;
    return (
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
    )
  }
}

export default NewNoteForm;

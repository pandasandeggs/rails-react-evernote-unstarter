import React, { Component } from 'react';

class NewNoteForm extends Component {

  render() {

    return (
      <div className="col-sm-8">
        <form>
          <label>
          Title:
            <input type="text" name="Title"/>
          </label>
          <label>
            <textarea placeholder="Thank someone here!" />
          </label>
            <input type="submit" value="Save" />
        </form>
      </div>
    )
  }
}

export default NewNoteForm;

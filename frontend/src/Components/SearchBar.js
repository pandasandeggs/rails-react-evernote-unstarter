import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    return (
      <div className="SearchBar">
        <form className="form-group">
          <input className="form-control" type="text" placeholder="Search.." />
        </form>
      </div>
    );
  }
}

export default SearchBar;

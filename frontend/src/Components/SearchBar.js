import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    return (
      <div className="SearchBar">
        <div className="topnav">
          <input type="text" placeholder="Search.." />
        </div>
      </div>
    );
  }
}

export default SearchBar;

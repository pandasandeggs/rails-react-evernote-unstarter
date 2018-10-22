import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    searchTerm: ''
  };

  handleInputChange = e => {
    this.setState({
      searchTerm: e.target.value
    })
  };

  render() {
    // console.log("current searchTerm", this.state.searchTerm)
    return (
      <div className="SearchBar">
        <form className="form-group"
        onSubmit={e => {
          e.preventDefault();
          this.props.handleSearchSubmit(this.state.searchTerm)
        }}>
          <input className="form-control" onChange={this.handleInputChange} placeholder="Search Letters Here..." />
          <input type="submit"  value="Search" />
        </form>
      </div>
    );
  };
}

export default SearchBar;

import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar'
import Login from '../Components/Login'

class Header extends Component {

  render() {
    return (
      <div className="page-header">
        { !this.props.user ? null : <h5>Hello {this.props.user.username}!</h5>}
        <img src="http://jennifermcateerphotography.com/wp-content/uploads/2015/11/thankful.png" alt="thankful logo"/>
        <p>Express your gratitude to the world!</p>
        <SearchBar handleSearchSubmit={this.props.handleSearchSubmit}/>
      </div>
    );
  }
}

export default Header;

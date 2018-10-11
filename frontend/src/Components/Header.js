import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar'

class Header extends Component {

  render() {
    return (
      <div className="Header">
          <img src="http://jennifermcateerphotography.com/wp-content/uploads/2015/11/thankful.png" alt="thankful logo"/>
          <p>Express your gratitude to the world!</p>
          <SearchBar />
      </div>
    );
  }
}

export default Header;

import React, { Component } from 'react';

class SignUp extends Component {

  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">Sign Up</div>
        <div className="card-body">
          <form className="form-group" onSubmit={this.handleSubmit}>
            <label>
            Username:
              <input className="form-control form-control-lg" type="text" name="Username" value={username} onChange={this.handleUsernameChange}/>
            </label>
            <br/><br/>
            <label>
            Password:
              <input className="form-control form-control-lg" value={password} onChange={this.handlePasswordChange}/>
            </label>
            <br/><br/><br/>
              <input type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    </div>
    );
  }
}

export default SignUp;

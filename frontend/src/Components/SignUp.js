import React, { Component } from 'react';

class SignUp extends Component {

  state = {
    username: '',
    password: '',
    about: ''
  }

  handleUsernameChange = e => this.setState({username: e.target.value});

  handlePasswordChange = e => this.setState({password: e.target.value});

  handleAboutChange = e => this.setState({about: e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state.username, this.state.password, this.state.about)
  }


  render() {
    const { username, password, about } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">New Here? Sign Up!</div>
          <div className="card-body">
            <form className="form-group" onSubmit={this.handleSubmit}>
              <label>
              Username:
                <input className="form-control form-control-lg" type="text" name="Username" value={username} onChange={this.handleUsernameChange}/>
              </label>
              <br/><br/>
              <label>
              Password:
                <input className="form-control form-control-lg" type="password" value={password} onChange={this.handlePasswordChange}/>
              </label>
              <br/><br/>
              <label>
              Tell us about you:
                <input className="form-control form-control-lg" type="text" name="About" value={about} onChange={this.handleAboutChange}/>
              </label>
              <br/><br/><br/>
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    </div>
    )
  }
}

export default SignUp;

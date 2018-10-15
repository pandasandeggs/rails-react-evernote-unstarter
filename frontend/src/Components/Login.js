import React, { Component } from 'react';

class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleUsernameChange = e => this.setState({username: e.target.value});

  handlePasswordChange = e => this.setState({password: e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password)
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Login</div>
          <div className="card-body">
            <form className="form-group" onSubmit={this.handleSubmit}>
              <label>
              Username:
                <input className="form-control form-control-lg" type="text" name="Username" value={username} onChange={this.handleUsernameChange}/>
              </label>
              <br/><br/>
              <label>
              Password:
                <input className="form-control form-control-lg" value={password} type="password" onChange={this.handlePasswordChange}/>
              </label>
              <br/><br/><br/>
                <input type="submit" value="Login" />
            </form>
          </div>
      </div>
    );
  }
}

export default Login;

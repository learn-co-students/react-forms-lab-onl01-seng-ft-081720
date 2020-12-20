import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();
    this.handleLogin = props.handleLogin
    this.state = {
      username: '',
      password: ''
    };
  }



  handleLoginChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (!(this.state.username === '') && !(this.state.password == '')) {

      return this.props.handleLogin(this.state)
    }

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleLoginChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleLoginChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

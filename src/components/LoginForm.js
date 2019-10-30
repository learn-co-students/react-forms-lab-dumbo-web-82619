import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    let newValue = event.target.value
    this.setState({
      [event.target.name]: newValue
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.password.length !== 0 && this.state.username.length !== 0){
      this.props.handleLogin(this.state)
      this.setState({
        username: "",
        password: ""
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
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

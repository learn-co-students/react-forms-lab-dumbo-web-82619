import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    }, () => {console.log(this.state)}
    )
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    }, () => {console.log(this.state)}
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.username !== '' &&  this.state.password !== '') {
      return this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text" 
            value={this.state.username}
            onChange={this.handleUsername}
            />
          </label>
        </div>
        
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password" 
            value={this.state.password}
            onChange={this.handlePassword}
            />
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

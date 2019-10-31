import React from "react"

class LoginForm extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) { 
      this.props.handleLogin(this.state)
    } else {
      console.log('Both fields must be filled')
      return null
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange} 
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              type="password"
              id="password" 
              name="password" 
              value={this.state.password}
              onChange={this.handleChange}  
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    )
  }
}

export default LoginForm

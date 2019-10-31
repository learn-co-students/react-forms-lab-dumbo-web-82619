import React from "react"

class TwitterMessage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      message: '',
      chars: props.maxChars
    }
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
      chars: this.props.maxChars - event.target.value.length
    }) 
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          id="message"
          name="message" 
          value={this.state.message}
          onChange={event => this.handleChange(event)} 
        />
        <pre>{this.state.chars} RemainingCharacters</pre>
      </div>
      
    )
  }
}

export default TwitterMessage

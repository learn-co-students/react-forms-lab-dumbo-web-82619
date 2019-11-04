import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      twitter: ''
    }
  }
  
  handleChange = (event) => {
    this.setState({
      twitter: event.target.value
      }, 
      () => {console.log(this.state);}
    )
    
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message"
        value={this.state.twitter}
        onChange={this.handleChange}
        />
        <br />
        Current Character:
        {this.props.maxChars-this.state.twitter.length}
      </div>
    );
  }
}

export default TwitterMessage;

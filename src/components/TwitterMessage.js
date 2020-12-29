import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleEvent = event => {
    this.setState({
    message: event.target.value  
    })
  }

  render() {
    let characterCount = this.props.maxChars - this.state.message.length

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleEvent(event)} value = {this.state.message} name="message" id="message" />
        <p>{characterCount}</p>
      </div>
    );
  }
}

export default TwitterMessage;

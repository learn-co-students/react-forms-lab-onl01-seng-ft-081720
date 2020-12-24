import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChars = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong> <em>(You have {this.props.maxChars - this.state.message.length} characters remaining)</em>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleChars(event)} />
      </div>
    );
  }
}

export default TwitterMessage;

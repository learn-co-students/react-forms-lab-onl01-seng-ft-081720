import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.maxChars = props.maxChars
    this.state = {
      twitterMessage: ''
    };
  }
  
  handleInputOnChange = (event) => {
    this.maxChars = this.maxChars - 1
    this.setState({
      twitterMessage: event.target.value
    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleInputOnChange} maxChars={this.maxChars} type="text" name="message" id="message" value={this.state.twitterMessage} />
        {this.maxChars}

      </div>
    );
  }
}

export default TwitterMessage;
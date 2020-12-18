import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    console.log(this.props)
    this.state = {message: ""};
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })

  }

  render() {
    let charsRemaining = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={e => this.handleChange(e)}/>
        characters remaining {charsRemaining}
      </div>
    );
  }
}

export default TwitterMessage;

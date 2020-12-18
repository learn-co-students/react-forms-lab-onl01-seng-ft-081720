import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value,
    })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={e => this.handleMessageChange(e)} value={this.state.message}/>
        <p>{this.props.maxChars - this.state.message.length} characters remaining.</p>
      </div>
    );
  }
}
export default TwitterMessage;

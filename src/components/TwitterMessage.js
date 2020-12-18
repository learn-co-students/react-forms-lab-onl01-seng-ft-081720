import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChars = e => {
    // e.preventDefault()
    this.setState({
      message: e.target.value
    })
  }


  render() {
    let chars = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={e => this.handleChars(e)} type="text" name="message" id="message" value={this.state.message}/>
        {chars}
      </div>
    );
  }

}

export default TwitterMessage;

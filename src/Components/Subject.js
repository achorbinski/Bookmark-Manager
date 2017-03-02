import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
      newResource: 'Awesome React Tutorial',
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
  }

  // event handlers

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  handleTyping(e) {
    e.target.value
  }

  render() {
    return(
      <div>
        <h2 onClick={this.handleClick}>{this.props.items.subject}</h2>
      </div>
      <p>{this.props.subject}</p>
    )
  }
}

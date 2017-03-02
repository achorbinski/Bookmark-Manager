import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
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
    console.log(this.props.items)
    return(
      <div>
        <h2 onClick={this.handleClick}>{this.props.items.subject}</h2>
        <ul>
          {
            this.props.items.resources.map((resource) => {
              if (this.state.isClicked === true){
                return (
                  <li>
                    <a href={resource.url}>{resource.title}</a>
                  </li>
                )}
              }
          )}
        </ul>
      </div>
    )
  }
}

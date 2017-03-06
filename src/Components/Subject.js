import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: true,
      title:'',
      url:'',
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // event handlers

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  handleTyping(e) {
    this.setState(
      {[e.target.name]:e.target.value}
    );
  }

  handleSubmit(e){
    e.preventDefault();

    const newResource = {
      title: this.state.title,
      url: this.state.url,
    }

    this.props.addResource(this.props.index, newResource);
  }

  render() {

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
        <form>
          <input type="text" name="title" placeholder="Title" onChange={this.handleTyping} value={this.state.title}></input>
          <input type="text" name="url" placeholder="URL" onChange={this.handleTyping} value={this.state.url}></input>
          <button onClick={this.handleSubmit}>Add New Resource</button>
        </form>
      </div>
    )
  }
}

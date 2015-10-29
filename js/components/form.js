import React from 'react';

export default React.createClass({

  getInitialState() {
    return {
      message: ''
    };
  },

  updateMessage(event) {
    let newMessage = event.target.value;

    this.setState({
      message: newMessage
    });
  },

  submitHandler(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.message);
  },

  render() {

    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <input onChange={this.updateMessage} type="text" value={this.state.message}>Image Url</input>
          <input onChange={this.updateMessage} type="text" value={this.state.message}>Title</input>
          <input onChange={this.updateMessage} type="textarea" value={this.state.message}>Description</input>
          <input type="submit">Submit</input>
        </form>
      </div>

    );

  }



});
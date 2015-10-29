import React from 'react';

export default React.createClass({

  getInitialState() {
    return {
      message: ''
    };
  },

  updateMessage(event) {
    let newMessage = event.target.value;

    // let size = newMessage.length;

    // let secret = SECRET_MESSAGE.substring(0, size);

    this.setState({
      message: newMessage
    });
  },

  cancelHandler() {
    this.props.onCancelClick();
  },

  submitHandler(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.message);
  },

  render() {

    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <input onChange={this.updateMessage} type="text" value={this.state.message}/>
        </form>
        <button onClick={this.cancelHandler}>Cancel</button>
      </div>

    );

  }



});
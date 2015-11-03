import React from 'react';

export default React.createClass({

  render(data) {
    return (
      <div className="header">
        <img src={data.headurl}/>
        <h2>Home</h2>
        <h2>Add</h2>
        <h2>Edit</h2>
      </div>
    );
  }

});
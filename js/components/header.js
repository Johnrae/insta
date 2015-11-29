import React from 'react';

export default React.createClass({

  render(data) {
    return (
      <div className="header">
        <img src={data.headurl}/>
      </div>
    );
  }

});
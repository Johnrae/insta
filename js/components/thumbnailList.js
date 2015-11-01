import React from 'react';

export default React.createClass({

  render() {
    return (
      <div className="thumbnail-list">
        <Thumbnail src={this.props.data.url}/>
      </div>
    )
  }
}); 
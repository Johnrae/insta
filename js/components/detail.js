import React from 'react';
import Thumbnail from './thumbnail';

export default React.createClass({

  render() {
    return (
      <div>
       <Thumbnail key={this.props.data.objectId} src={this.props.data.url} className='bigboy'/>
       <h2>{this.props.data.title}</h2>
       <p>{this.props.data.description}</p>
      </div>
    );
  }
}); 

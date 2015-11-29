import React from 'react';

export default React.createClass({

  render() {
    return (
        
        <div className="add-form">
          <form onSubmit={this.submitHandler}>

            <input onChange={this.updateTitle} 
              className="add-title" 
              placeholder="Picture Title" 
              type="text"/>
          
            <input onChange={this.updateUrl} 
              className="add-url" 
              placeholder="Add Image URL" 
              type="url"/>
          
            <textarea onChange={this.updateAbout} 
              className="add-about" 
              placeholder="Add Image Description"
              type="text"/>

          </form>

          <div className="add-submit">
            <button className="add-submit" 
            onClick={this.submitHandler}>Submit</button>
          </div>
        </div>

    );
  }
}); 

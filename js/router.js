import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import PictureCollection from './picture_collection';
import ThumbnailList from './components/thumbnailList';
import Thumbnail from './components/thumbnail';
import DetailView from './components/detail';
import AddView from './components/add';



export default Backbone.Router.extend({

  routes: {
    ""       : "redirectToHome",
    "home"   : "showHome", 
    "detail/:id" : "showDetail",
    "add"    : "showAdd",
    "edit"   : "showEdit"
  },

  initialize(appElement){
    this.el = appElement;
    this.collection = new PictureCollection();
  },

  start() {
    Backbone.history.start();
    return this;
  },
  
  selectImage(id){
    this.navigate('detail/' + id, {trigger: true})
  },

  render(component) {
    ReactDom.render(component, this.el)
  },

  showHome() {
    this.collection.fetch().then(()=> {
      let data = this.collection.toJSON(); 

      this.render(
        <ThumbnailList data={data} onThumbnailSelect={this.selectImage.bind(this)}/>
      );  
    });
  },

  showDetail(id) {
    let singleImage = this.collection.get(id);

    if (singleImage){
      this.render(
        <DetailView data={singleImage.toJSON()}/>
      );
    } else {
      singleImage = this.collection.add({objectId: id});
      singleImage.fetch().then(() => {
        this.render(
          <DetailView
            data={image.toJSON()}/>
        );
      });
    }
  },

  showAdd() {
    this.render(<AddView data={this.collection.toJSON()}/>);
  },

  redirectToHome() {
    this.navigate('home', {
      replace: true,
      trigger: true
    });
  },

});
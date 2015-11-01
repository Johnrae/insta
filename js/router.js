import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import PictureCollection from './picture_collection';
import PictureModel from './picture_model';
import ThumbnailList from './components/thumbnailList';
import HomeComponent from './components/home';

export default Backbone.Router.extend({

  routes: {
    ""       : "redirectToHome",
    "home"   : "showHome", 
    "detail" : "showDetail",
    "add"    : "showAdd",
    "edit"   : "showEdit"

  },

  initailize(appElement){
    this.el = appElement;
    this.collection = new PictureCollection();
    console.log(this.collection);
  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },

  start() {
    Backbone.history.start();
    return this;
  },

  showHome() {
    this.picCollection.fetch().then(()=> {
      let data= this.collection.toJSON();

      ReactDom.render(
        <HomeComponent parse={data} onThumbnailSelect={this.selectImage.bind(this)} />,
      this.el); //end of render
       
    });
  },


  render(component) {
    ReactDom.render(component, this.el);
  },


  redirectToHome() {
    this.navigate('home', {
      replace: true,
      trigger: true
    });
  },

});
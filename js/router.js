import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/home';
export default Backbone.Router.extend({

  routes: {
    ""       : "showHome",
    "detail" : "showDetail",
    "add"    : "showAdd",
    "edit"   : "showEdit"

  },

  initailize(appElement){
    this.el = appElement;
  },

  start() {
    Backbone.history.start();
    return this;
  },

  showHome() {
    ReactDom.render(
      //placeholder should be the name of the data object
      <ThumbnailList src={data}/>,
      this.el
    );

  },

  render(component) {
    ReactDom.render(component, this.el);
  },

  showDetail() {

  },

  showAdd() {

  },

  showEdit() {

  }


});
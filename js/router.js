import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

export default Backbone.Router.extend({

  routes: {
    ""       : "showHome",
    "add"    : "showAdd",
    "edit"   : "showEdit",
    "detail" : "showDetail"

  },

  initailize(appElement){
    this.el = appElement;
  },

  start() {
    Backbone.history.start();
    return this;
  },

  showHome() {

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
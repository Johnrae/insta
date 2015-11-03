import Backbone from 'backbone';
import Picture from './picture_model';

export default Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/data',

  model: Picture,

  parse: function(data) {
    return data.results;
  }

});
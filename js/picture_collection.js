import Backbone from 'backbone';
import {APP_URL} from './parse_data';
import Picture from './picture_model';

export default Backbone.Collection.extend ({

  url: APP_URL,

  model: Picture,

  parse: function(data) {
    return data.results;
  }

});
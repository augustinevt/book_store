import DS from 'ember-data';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({

});

export default Model.extend({
  name: attr('string'),
  discount: attr('number'),
  published: hasMany('book', { async: true })
});

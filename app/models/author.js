import DS from 'ember-data';
import Publisher from './publisher';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr('string'),
  books: DS.hasMany('book')
});

export default Publisher.extend({
  books: hasMany('book', { async: true })
});

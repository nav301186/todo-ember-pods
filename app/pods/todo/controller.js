import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  createTodo: function() {
    var title = this.get('newTitle');
    if(!title){return false;}
    if(!title.trim()){return ;}
    var todo = this.store.createRecord('todo',{
      title: title,
      isCompleted: false
    });
    this.set('newTitle','');
    todo.save();
  }
},
// remainingItems: function(){
//   return this.filterBy('isCompleted', false).get('length');
// }.property('@each.isCompleted'),

inflection: function(){
  var remaining = this.get('remainingItems');
  return remaining === 1 ? 'item' : 'items';
}.property('remainingItems')

});

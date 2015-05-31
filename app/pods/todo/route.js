import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var todos = Ember.RSVP.hash({
      todos: this.store.find('todo')
    });

return todos;
  },
  setupController: function(controller, models){
    controller.setProperties(models);
  }
});

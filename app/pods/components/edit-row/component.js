import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      editTodo: function() {
        // alert("Editing");
        this.set('isEditing', true);
      },

    acceptChanges: function(){
      this.set('isEditing',false);
     alert("Accepting changes ..." + this.get("todo"));
          if(Ember.isEmpty(this.get('todo.title'))){
            this.send('removeTodo');
          }else{

        this.get('todo').save();
        }
      },

      removeTodo: function(){
        var todo = this.get('todo');
        todo.destroyRecord();
      }
  },

  isEditing: false,

  isCompleted: function(key, value) {
    // what is this?
    var model = this.get('todo');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as a setter
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('todo.isCompleted'),

  didInsertElement: function(){
    this.$().focus();
  }
});

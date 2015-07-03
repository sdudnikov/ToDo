

Todo.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      var todo = this.store.createRecord('Todos', {
        title: title,
        isCompleted: false
      });

      this.set('newTitle', '');
      todo.save();
    }
  }
});

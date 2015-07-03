

Todo.Router.map(function() {
  this.resource('todos', { path: '/' });
});

Todo.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('Todos');
  }
});

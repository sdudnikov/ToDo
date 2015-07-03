

Todo.Router.map(function() {
  this.resource('todos', { path: '/' }, function () {
  this.route('active');
  });
});

Todo.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todos');  //не зависит от регистра (model name is Todos)
  }
});

Todo.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
});


Todo.TodosActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todos', function(todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});

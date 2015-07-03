

Todo.Router.map(function() {
  this.resource('todos', { path: '/' }, function () {
  this.route('active');
  this.route('completed');
  });
});

Todo.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todosModel');  //не зависит от регистра (model name is TodosModel)
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

Todo.TodosCompletedRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('TodosModel', function(todo) {  // можно использовать модель (TodosModel)
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});





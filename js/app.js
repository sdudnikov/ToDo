
window.Todo = Ember.Application.create();

Todo.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});

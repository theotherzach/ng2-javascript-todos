function TodoComponent() {
  this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
  this.addTodo = function(todo) {
    this.todos.push(todo.value);
    todo.value = null;
  };
}

TodoComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'todo'
  }),
  new angular.ViewAnnotation({
    templateUrl: 'todo.html',
    directives: [angular.For]
  })
];

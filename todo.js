function TodoComponent(todos) {
  this.todos = todos
  this.addTodo = function(todo) {
    this.todos.list.push(todo.value);
    todo.value = null;
  };
}

TodoComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'todo',
    injectables: [TodosService]
  }),
  new angular.ViewAnnotation({
    templateUrl: 'todo.html',
    directives: [angular.For]
  })
];

TodoComponent.parameters = [[TodosService]]

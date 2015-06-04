function AppComponent() {}

AppComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'app'
  }),
  new angular.ViewAnnotation({
    templateUrl: 'main.html',
    directives: [TodoComponent]
  })
];

function DisplayComponent(friends) {
  this.myName = "Alice";
  this.names = friends.names;
}

DisplayComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: "display",
    injectables: [FriendsService]
  }),
  new angular.ViewAnnotation({
    directives: [angular.For],
    template:
      '<p>My name: {{ myName }}</p>' +
      '<p>Friends:</p>' +
      '<ul>' +
      '<li *for="#name of names">' +
      '{{ name }}' +
      '</li>' +
      '</ul>',
  })
];

DisplayComponent.parameters = [[FriendsService]];
document.addEventListener("DOMContentLoaded", function() {
  angular.bootstrap(DisplayComponent);
});

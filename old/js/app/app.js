// Controller
controllers = {
  home: require('./controller/home')
};

console.log(controllers);

var app = angular.module('panelApp', [
  'ngRoute'
]);

// app.controller('homeController', ['$scope', ])

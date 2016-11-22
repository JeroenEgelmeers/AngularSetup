'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
]).config(myAppConfig);


myAppConfig.$inject = ['$routeProvider'];

function myAppConfig($routeProvider) {
  $routeProvider
      .when("/", {
        redirectTo: "/home"
      })
      .when("/home", {
        templateUrl: 'pages/home.html'
      })
      .when("/about", {
        templateUrl: 'pages/about.html'
      })
}
'use strict';

/**
 * @ngdoc overview
 * @name angularTrainingApp
 * @description
 * # angularTrainingApp
 *
 * Main module of the application.
 */
angular
  .module('angularTrainingApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'ToDoCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

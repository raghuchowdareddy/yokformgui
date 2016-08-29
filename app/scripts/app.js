'use strict';

/**
 * @ngdoc overview
 * @name yokformguiApp
 * @description
 * # yokformguiApp
 *
 * Main module of the application.
 */
angular
  .module('yokformguiApp', [
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
      .when('/vegitables', {
        templateUrl: 'views/vegitable/vegitables.html',
        controller: 'VegitablesCtrl',
        controllerAs: 'vegitable'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

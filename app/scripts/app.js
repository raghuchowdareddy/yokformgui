(function() {
	//'use strict';


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
  ]).config(config);
config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		//templateUrl : 'resources/default/default.view.html'
			templateUrl: 'views/default/default.view.html',
	        controller: 'MainCtrl',
	        controllerAs: 'main'
		})
	.when('/vegitables', {
        templateUrl: 'views/vegitable/all-vegitables.html',
        controller: 'VegitablesCtrl',
        controllerAs: 'vegitable'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
	.otherwise({
		redirectTo : '/'
	});
}
 /* //
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/', {
		templateUrl : 'views/default/default.view.html'
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
  });*/
})();
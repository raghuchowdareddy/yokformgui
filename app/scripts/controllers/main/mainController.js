'use strict';

/**
 * @ngdoc function
 * @name yokformguiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yokformguiApp
 */
angular.module('yokformguiApp')
  .controller('MainCtrl', ['$scope','$rootScope','VegitableFactory', function ($scope,$rootScope,VegitableFactory) {
    
    VegitableFactory.subscribe($scope,function someThingChanged(event,data){
    	$scope.count = data.vegitablesBagged.length;
    	console.log(data.vegitablesBagged +"  "+ event);
    });
    
  }]);


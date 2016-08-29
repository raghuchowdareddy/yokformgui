'use strict';

/**
 * @ngdoc function
 * @name yokformguiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yokformguiApp
 */
angular.module('yokformguiApp')
  .controller('OrdersCtrl', ['$scope', function ($scope) {
    
    $scope.orders = function(orders){
     console.log(""+orders) ;	
    }
    
  }]);

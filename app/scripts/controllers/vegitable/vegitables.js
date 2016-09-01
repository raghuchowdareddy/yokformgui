'use strict';

/**
 * @ngdoc function
 * @name yokformguiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yokformguiApp
 */
angular.module('yokformguiApp')
  .controller('VegitablesCtrl', ['$scope','vegitableService', function ($scope,vegitableService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.vegitables = vegitableService.getVegitables();
    console.log($scope.vegitables);
    
    $scope.quantity = ['250gm', '500gm', '1kg', '2kg', '3kg'];
    $scope.selectedQuantity='qunatity';
    $scope.dropboxitemselected = function (item,quantitySelected) {
    	item.selectedQuantity = quantitySelected;
    	 console.log($scope.vegitables);
    }
    
  }]);

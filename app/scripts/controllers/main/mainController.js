'use strict';

/**
 * @ngdoc function
 * @name yokformguiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yokformguiApp
 */
angular.module('yokformguiApp')
  .controller('MainCtrl', ['$scope','$rootScope','VegitableService', function ($scope,$rootScope,VegitableService) {
    $scope.count=0;
    
    $scope.$on('valuesUpdated', function() {
        $scope.selectedVegitables = VegitableService.selectedVegitables;
        $scope.count = VegitableService.count;
    });
    
  }]);


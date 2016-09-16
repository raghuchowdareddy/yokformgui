'use strict';

/**
 * @ngdoc function
 * @name yokformguiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yokformguiApp
 */
angular.module('yokformguiApp')
  .controller('VegitablesCtrl', ['$scope','$rootScope','VegitableService', function ($scope,$rootScope,VegitableService) {
    console.log("fdfdf");
    $scope.print="100000";
    $scope.selectedVegitables = [];
  
    $scope.vegitables = VegitableService.getVegitables();
    console.log($scope.vegitables);
    
    $scope.quantity = ['','250gm', '500gm', '1kg', '2kg', '3kg'];
    
    $scope.$watch('selectedVegitables', function() {
    	VegitableService.updateTopValue($scope.selectedVegitables);
    });
    
    /*$scope.dropboxitemselected = function (item,quantitySelected) {
    	item.details.selectedQuantity = quantitySelected;
    	$scope.selectedVegitables.push(item);
    	 console.log($scope.selectedVegitables);
    };*/
    $scope.addToBuyList = function(selectedVegitable){
    	$scope.print="2000";
    	//selectedVegitable.details.enableRemoveButton=false;
    	$scope.selectedVegitables.push(selectedVegitable);
    	
    	console.log($scope.selectedVegitables.length);
    	
    };
    $scope.removeFromBuyList = function(selectedVegitable){
    	selectedVegitable.details.enableRemoveButton=false;
    	
    	selectedVegitable.details.selectedQuantity='';
    	var position = $scope.selectedVegitables.indexOf(selectedVegitable);
    	$scope.selectedVegitables.splice(position, 1);
    	console.log($scope.selectedVegitables);
    }
    
  }]);


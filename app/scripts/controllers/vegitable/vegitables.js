'use strict';

/**
 * @ngdoc function
 * @name yokformguiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yokformguiApp
 */
angular.module('yokformguiApp')
  .controller('VegitablesCtrl', function ($scope,$rootScope,vegService,VegitableFactory) {
    
    $rootScope.selectedVegitables = [];
    $scope.vegitables = VegitableFactory.getVegitables();
    console.log("veggis are "+$scope.vegitables);
    
    $scope.quantity = ['','250gm', '500gm', '1kg', '2kg', '3kg'];
 
    $scope.$watch('selectedVegitables', function(newValue, oldValue){
    	VegitableFactory.notify(newValue);
    	console.log(newValue.length);
    }, true);
    
//    $scope.$watch('VegitableFactory.selectedVegitables', function() {
//    	console.log("hey");
//    	//VegitableFactory.updateTopValue($scope.selectedVegitables);
//    });
    
    
    /*$scope.dropboxitemselected = function (item,quantitySelected) {
    	item.details.selectedQuantity = quantitySelected;
    	$scope.selectedVegitables.push(item);
    	 console.log($scope.selectedVegitables);
    };*/
    $scope.addToBuyList = function(selectedVegitable){
    	$rootScope.print=selectedVegitable;
    	$rootScope.selectedVegitables.push(selectedVegitable);
    	//selectedVegitable.details.enableRemoveButton=false;
    	VegitableFactory.selectedVegitables=selectedVegitable;
    	
    	console.log($rootScope.selectedVegitables);
    	
    };
    $scope.removeFromBuyList = function(selectedVegitable){
    	selectedVegitable.details.enableRemoveButton=false;
    	
    	selectedVegitable.details.selectedQuantity='';
    	var position = $rootScope.selectedVegitables.indexOf(selectedVegitable);
    	$rootScope.selectedVegitables.splice(position, 1);
    	console.log($rootScope.selectedVegitables);
    }
    
  });


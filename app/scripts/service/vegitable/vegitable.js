'use strict'

angular.module('yokformguiApp')
.service('vegitableService',function($http, $q){
	this.getVegitables = function(){
		return vegitables;
	}

});
//input parameters
var vegitables = 
    [
     {'name':'tomatoes.jpg'},
     {'name':'potatoes.jpg'},
     {'name':'onion.jpg'}
   ] ;
//
//define(['yokformguiApp'], function(yokformguiApp){
//	
//	var injectParams = ['$http','$q'];
//	
//	var vegitableFactory = function($http, $q){
//		factory.getVegitable = function(){
//			var vegitables = 'tomotoes';//{'tomotoes','potatoes','onio'};
//			return vegitables;
//		};
//		
//	}
//	
//	vegitableFactory.$inject = injectParams;
//	yokformguiApp.factory('vegitableService', vegitableService);
//});
'use strict'

angular.module('yokformguiApp')
.service('vegService',function($http, $q,$rootScope){
	
	this.getVegitables = function(){
		return all_vegitables;
	}
	    
})
.factory('VegitableFactory', function($rootScope){
	var service = {};
    service.vegitablesBagged ;
    service.totalItems;

	return{
		subscribe: function(scope, callback){
			console.log('in subscribe');
			var handler = $rootScope.$on('selectedVegitables',callback);
			scope.$on('$destroy',handler)
		},
		notify: function(newValue){
			console.log('in notif');
			service.vegitablesBagged = newValue;
			$rootScope.$emit('selectedVegitables',{vegitablesBagged: service.vegitablesBagged});
		},
		getVegitables: function(){
     	     return all_vegitables;
		}
		
	};
	
});   
 
//input parameters
var all_vegitables = 
    [
     {'name':'tomatoes.jpg',
    	 'details':
    	 {
    		 'price':10.0,'status':'available','description':'i am tomato','enableRemoveButton':'false','selectedQuantity':''
    	 }
     },
     {'name':'potatoes.jpg',
    	 'details':
    	 {
    		 'price':10.0,'status':'available','description':'i am potatoes','enableRemoveButton':'false','selectedQuantity':''
    	 }
     },
     {'name':'onion.jpg',
    	 'details':
    	 {
    		 'price':10.0,'status':'available','description':'i am onion','enableRemoveButton':'false','selectedQuantity':''
    	 }
     },
     {'name':'tomatoes.jpg',
    	 'details':
    	 {
    		 'price':10.0,'status':'available','description':'i am tomato','enableRemoveButton':'false','selectedQuantity':''
    	 }
     },
     {'name':'potatoes.jpg',
    	 'details':
    	 {
    		 'price':10.0,'status':'available','description':'i am potatoes','enableRemoveButton':'false','selectedQuantity':''
    	 }
     },
     {'name':'onion.jpg',
    	 'details':
    	 {
    		 'price':10.0,'status':'available','description':'i am onion','enableRemoveButton':'false','selectedQuantity':''
    	 }
     }
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
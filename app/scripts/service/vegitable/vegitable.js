'use strict'

//angular.module('yokformguiApp')
//.service('vegitableService',function($http, $q){
//	this.getVegitables = function(){
//		return vegitables;
//	}
//	    
//});

angular.module('vegitableService', []).factory('VegitableService', function($rootScope,$http,$q){
	var service = {};
    service.selectedVegitables = [];
    service.count=0;
    
    

    service.updateTopValue = function(value){
        this.selectedVegitables = value;
        this.count=10;
        $rootScope.$broadcast("valuesUpdated");
    }
    
    service.getVegitables = function(){
	  return this.vegitables;
    }
    
    service.vegitables=[
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
	
});
var demo = angular.module('yokformguiApp', ['vegitableService']);
/*//input parameters
var vegitables = 
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
   ] ;*/
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
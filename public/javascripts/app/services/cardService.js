(function() {
	'use strict';

	angular.module('paymentApp.services')
		.factory('cardService', cardService);

	cardService.$inject = ['$http'];

	function cardService($http) {
		var factory = {};

		factory.getCardInfo = function(card) {
			return $http.get('/models/cards/'+card+'.json');
		};
		
		return factory;
	}

})();
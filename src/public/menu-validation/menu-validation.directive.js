(function () {
	'use strict';

	angular.module('public')
	.directive('menuValidation', menuValidation);

	menuValidation.$inject = ['MenuService', '$q'];
	function menuValidation(MenuService, $q) {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function (scope, element, attribute, ctrl) {
				
				ctrl.$asyncValidators.validmenu = function (modelValue, viewValue) {
					var favoritedish = modelValue || viewValue;
					var result = MenuService.getFavoriteMenu(favoritedish);
					
					return result.then(function(response) {
						console.log(response);
						if (response.status == 200) {
							return true;
						} else {
							return $q.reject(response);
						}	
					});	
				}
			}
		};
	}

})();
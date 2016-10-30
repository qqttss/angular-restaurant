(function () {
	'use strict';

	angular.module('public')
	.controller('MyinfoController', MyinfoController);

	MyinfoController.$inject = ['MyinfoService', 'MenuService', 'ApiPath'];
	function MyinfoController(MyinfoService, MenuService, ApiPath) {
		var myinfoctrl = this;
		myinfoctrl.submitted = false;
		myinfoctrl.submitted = MyinfoService.getSubmitInfo();
		myinfoctrl.favoriteDish = {};
		myinfoctrl.basePath = ApiPath;

		if (myinfoctrl.submitted === false) {

		} else {
			myinfoctrl.submittedInfo = MyinfoService.getMyinfo();
			console.log(myinfoctrl.submittedInfo);

			MenuService.getFavoriteMenu(myinfoctrl.submittedInfo.favoritedish)
			.then(function (response) {
				myinfoctrl.favoriteDish = response.data;
				console.log(myinfoctrl.favoriteDish);
			});
		}
	}
})();
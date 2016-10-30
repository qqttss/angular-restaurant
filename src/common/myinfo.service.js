(function () {
	'use strict';

	angular.module('common')
	.service('MyinfoService', MyinfoService);

	function MyinfoService() {
		var service = this;
		service.submitted = false;

		service.save = function (myinfo) {
			localStorage['firstPerson'] = JSON.stringify(myinfo);
		}

		service.getMyinfo = function () {
			return JSON.parse(localStorage['firstPerson']);
		}

		service.setSubmitInfo = function () {
			service.submitted = true;
		}

		service.getSubmitInfo = function () {
			return service.submitted;
		}
	}
})();
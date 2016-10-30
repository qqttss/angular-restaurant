(function () {
'use strict';

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MyinfoService', 'MenuService', '$timeout'];
function SignupController(MyinfoService, MenuService, $timeout) {
	var signup = this;
  	var user = {
  		firstname: '',
  		lastname: '',
  		phone: '',
  		email: '',
  		favoritedish: ''
  	};
  	signup.saved = false;

	signup.submit = function () {
	    
		user.firstname = signup.user.firstname;
		user.lastname = signup.user.lastname;
		user.phone = signup.user.phone;
		user.email = signup.user.email;
		user.favoritedish = signup.user.favoritedish;

	    MyinfoService.save(user);
	    MyinfoService.setSubmitInfo();
	    signup.saved = true;

	    signup.user = {};
	    user = {};
	    signup.regForm.$setPristine();
	    signup.regForm.$setUntouched();

	    console.log('Saved');

	    $timeout(function() {
	    	signup.saved = false;
	    }, 3000);
	};



}

})();
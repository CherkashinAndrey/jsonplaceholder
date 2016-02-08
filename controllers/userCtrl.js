(function() {

	angular
	.module('app')
	.controller('userCtrl', userCtrl)

	function userCtrl($scope, data) {
		$scope.users = data.data;
	}

})();

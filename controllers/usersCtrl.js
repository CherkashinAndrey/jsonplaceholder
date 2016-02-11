(function() {

	angular
	.module('app')
	.controller('usersCtrl', usersCtrl);

	function usersCtrl($scope, data) {
		$scope.users = data.data;
	}

})();

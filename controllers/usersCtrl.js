(function() {

	angular
	.module('app')
	.controller('usersCtrl', usersCtrl);

	function usersCtrl($scope, data) {
		$scope.user = data.data[0];
	}

})();

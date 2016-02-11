(function() {

	angular
	.module('app')
	.controller('userCtrl', userCtrl)

	function userCtrl($scope, data) {
		$scope.user = data.data[0];
	}

})();

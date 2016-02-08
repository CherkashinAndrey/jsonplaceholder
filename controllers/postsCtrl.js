(function() {

	angular
	.module('app')
	.controller('postsCtrl', postsCtrl);

	function postsCtrl($scope, data) {
		$scope.posts = data.data;
		$scope.userName = data.userName;
	}

})();

(function() {

	angular
	.module('app')
	.controller('POSTPostsCtrl', POSTPostsCtrl);

	function POSTPostsCtrl($scope, data, POSTPostsServices) {
		$scope.posts = data.data;
		console.log('PostsCtrl',$scope.posts );

		$scope.addpost = function(post) {
			POSTPostsServices.PostRequest(post, $scope);
		}

	}

})();

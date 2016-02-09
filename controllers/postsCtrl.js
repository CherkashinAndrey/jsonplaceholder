(function() {

	angular
	.module('app')
	.controller('postsCtrl', postsCtrl);

	function postsCtrl($scope, data, postServices) {
		$scope.posts = data.data;
		$scope.userName = data.userName;

		$scope.addpost = function(post) {

			post.id = _.uniqueId('id:');
			post.userId = data.data[0].userId;
			postServices.PostRequest(post, $scope);
		}
	}



})();

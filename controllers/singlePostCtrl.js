
(function() {

  angular
    .module('app')
    .controller('singlePostCtrl', singlePostCtrl);

  function singlePostCtrl($scope, data) {
  	$scope.post = data.data[0];
  	$scope.comments = data.comments.data;

    // $scope.userName = data.userName;
  	console.log('singlePostCtrl ', data);
  }

})();

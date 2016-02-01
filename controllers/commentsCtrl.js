(function() {

  angular
    .module('app')
    .controller('commentsCtrl', commentsCtrl);

  function commentsCtrl($scope, data) {
  	$scope.comments = data.data;
  	//$scope.postTitle = data.postTitle;
  	console.log('commentsCtrl ', data);
  }
  
})();

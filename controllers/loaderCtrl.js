
(function() {

  angular
    .module('app')
    .controller('loaderCtrl', loaderCtrl)


  function loaderCtrl($scope) {

    $scope.start = function(){
    	$scope.load = true;
	}
	$scope.end = function(){
    	$scope.load = false;
	}
	
  }

})();

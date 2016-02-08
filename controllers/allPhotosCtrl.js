(function() {
  angular
    .module('app')
    .controller('allPhotosCtrl', allPhotosCtrl);

  function allPhotosCtrl($scope, data, allPhotosServices) {
    $scope.kolElementov = 3;
    $scope.photos = data.data;
  	$scope.quantity = $scope.kolElementov;

  	$scope.getData = function(event) {
        event.preventDefault();
  		  this.quantity += $scope.kolElementov;
  	}
  }

})();

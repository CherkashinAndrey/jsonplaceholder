(function() {

  angular
    .module('app')
    .controller('albumCtrl', albumCtrl);

  function albumCtrl($scope, data) {
  	$scope.jsonData = data.data;
  	$scope.userName = data.user.data[0].name;
  	console.log('userName ', $scope.userName);
  	console.log('albumCtrl ', data);
    
  }

})();


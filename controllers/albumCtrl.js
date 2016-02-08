(function() {

  angular
    .module('app')
    .controller('albumCtrl', albumCtrl);

  function albumCtrl($scope, data) {
  	$scope.albums = data.data;
  	$scope.userName = data.user.data[0].name;
  }

})();


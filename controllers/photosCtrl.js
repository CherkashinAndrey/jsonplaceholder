(function() {

  angular
    .module('app')
    .controller('photosCtrl', photosCtrl);

  function photosCtrl($scope, data) {
  	$scope.photos = data.data;
  }

})();

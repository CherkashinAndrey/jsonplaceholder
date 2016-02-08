(function() {

  angular
  .module('app')
  .controller('testGetPhotosCtrl', testGetPhotosCtrl)

  function testGetPhotosCtrl($scope, data, testGetPhotosServices) {
    $scope.test = data.config.params.albumId;
    $scope.photos = data.data;

    $scope.getData = function($event) {
      $event.preventDefault();
      this.test += 1;
      testGetPhotosServices.getPhotos(this.test, $scope);
    }
  }

})();
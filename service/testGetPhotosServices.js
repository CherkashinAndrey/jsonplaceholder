(function() {

  angular
  .module('app')
  .service('testGetPhotosServices', testGetPhotosServices)
  .constant('URL_PHOTOS', 'http://jsonplaceholder.typicode.com/photos');

  function testGetPhotosServices($http, URL_PHOTOS) {
    return {
     getPhotos: function(id, scope) {
      return $http({
        method: 'GET',
        url: URL_PHOTOS,
        params: {
          albumId: id
        }
      }).then(
      function (result) {
        return result;
      },
      function (error) {
        console.log(error);
      }
      ).then(
      function (result) {
       if (scope !== undefined) {
        scope.photos = scope.photos.concat(result.data);
      }
      return result;
    },
    function (error) {
      console.log(error);
    }
    );
    },
  }
}

})();

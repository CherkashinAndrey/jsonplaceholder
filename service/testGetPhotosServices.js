(function() {

  angular
    .module('app')
    .service('testGetPhotosServices', testGetPhotosServices)
    .constant('URL', 'http://jsonplaceholder.typicode.com/');

  function testGetPhotosServices($http, URL) {
    return {
       getPhotos: function(id, scope) {
        return $http({
          method: 'GET',
          url: URL + 'photos',
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


(function() {

  angular
    .module('app')
    .service('photosServices', photosServices)
    .constant('URL', 'http://jsonplaceholder.typicode.com/');

  function photosServices($http, URL) {
    return {
       getPhotos: function(id) {
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
        );
      }
    }
  }

})();

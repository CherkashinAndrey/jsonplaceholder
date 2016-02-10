  (function() {

    angular
    .module('app')
    .service('allPhotosServices', allPhotosServices)
    .constant('URL_PHOTOS', 'http://jsonplaceholder.typicode.com/photos');

    function allPhotosServices($http, URL_PHOTOS) {
      return {
       getPhotos: function(id) {
        return $http({
          method: 'GET',
          url: URL_PHOTOS,
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

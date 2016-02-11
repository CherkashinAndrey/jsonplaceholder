  (function() {

    angular
    .module('app')
    .service('allPhotosSliderServices', allPhotosSliderServices)
    .constant('URL_PHOTOS', 'http://jsonplaceholder.typicode.com/photos');

    function allPhotosSliderServices($http, URL_PHOTOS) {
      return {
       getPhotos: function(id) {
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
        );
      }
    }
  }

})();
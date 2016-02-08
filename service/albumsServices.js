
(function() {

  angular
    .module('app')
    .service('albumsServices', albumsServices)
    .constant('URL', 'http://jsonplaceholder.typicode.com/');

  function albumsServices($http, URL) {
    return {
       getAlbums: function(id) {
        return $http({
          method: 'GET',
          url: URL + 'albums',
          params: {
            userId: id
          }
        }).then(
          function (result) {
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

(function() {

  angular
  .module('app')
  .service('albumsServices', albumsServices)
  .constant('URL_ALBUMS', 'http://jsonplaceholder.typicode.com/albums');

  function albumsServices($http, URL_ALBUMS) {
    return {
     getAlbums: function(id) {
      return $http({
        method: 'GET',
        url: URL_ALBUMS,
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

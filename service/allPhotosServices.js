
(function() {

  angular
    .module('app')
    .service('allPhotosServices', allPhotosServices)
    .constant('URL', 'http://jsonplaceholder.typicode.com/');

  function allPhotosServices($http, URL) {
    return {
       getPhotos: function(id) {
        return $http({
          method: 'GET',
          url: 'http://jsonplaceholder.typicode.com/photos/'
          // params: {
          //   id : id
          // }
        }).then(
          function (result) {
            console.log('serv',result);
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

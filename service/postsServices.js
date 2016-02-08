
(function() {

  angular
    .module('app')
    .service('postServices', postServices)
    .constant('URL', 'http://jsonplaceholder.typicode.com/');

  function postServices($http, URL) {
    return {
       getPosts: function(config) {
        return $http({
          method: 'GET',
          url: URL + 'posts',
          params: config
        })
        .then(
          function (result) {
            return result;
          },
          function (error) {
            console.log(error);
          }
        )
      },
    }
  }

})();

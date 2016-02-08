(function() {

  angular
  .module('app')
  .service('postServices', postServices)
  .constant('URL_POSTS', 'http://jsonplaceholder.typicode.com/posts');

  function postServices($http, URL_POSTS) {
    return {
     getPosts: function(config) {
      return $http({
        method: 'GET',
        url: URL_POSTS,
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


(function() {

  angular
    .module('app')
    .service('commentsServices', commentsServices)
    .constant('URL', 'http://jsonplaceholder.typicode.com/');

  function commentsServices($http, URL) {
    return {
     
      getComments: function(id) {
        return $http({
          method: 'GET',
          url: URL + 'comments',
          params: {
            postId: id
          }
        }).then(
          function (result) {
            return result;
          },
          function (error) {
            console.log(error);
          }
        )
      }
    }
  }

})();

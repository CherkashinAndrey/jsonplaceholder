(function() {

  angular
  .module('app')
  .service('commentsServices', commentsServices)
  .constant('URL_COMMENTS', 'http://jsonplaceholder.typicode.com/comments');

  commentsServices.$inject = ['$http','URL_COMMENTS'];

  function commentsServices($http, URL_COMMENTS) {
    return {
     
      getComments: function(id) {
        return $http({
          method: 'GET',
          url: URL_COMMENTS,
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

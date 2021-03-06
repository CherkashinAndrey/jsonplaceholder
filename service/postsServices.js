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

    PostRequest: function(post, scope) {
        return $.ajax(URL_POSTS, {
          method: 'POST',
          data: {
            title: post.title,
            body: post.body,
            userId: post.userId
          }
        }).then(function(data) {
          scope.$apply(()=>scope.posts.push(post));
          console.log(scope.posts);
          scope.post = null;
        });
     }
  }
}

})();

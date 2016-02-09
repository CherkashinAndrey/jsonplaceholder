(function() {

  angular
  .module('app')
  .service('POSTPostsServices', POSTPostsServices)
  .constant('ROOT', 'http://jsonplaceholder.typicode.com/posts');

  function POSTPostsServices($http, ROOT) {
    return {
      GetRequest: function() {
        return $http({
          method: 'GET',
          url: ROOT
        }).then(
        function (result) {
          console.log('PostsReq',result);
          return result;
        },
        function (error) {
          console.log(error);
        }
        );
      },

      PostRequest: function(post, scope) {
        return $.ajax('http://jsonplaceholder.typicode.com/posts', {
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
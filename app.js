
// (function () {

  angular
    .module('app', ['ui.router','cfp.loadingBar'] )
    .config(routes)
    .config(config)


  function config ($locationProvider) {
    // interceptor
  }

  function routes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/users');
    
    $stateProvider

      .state('users', {
        controller: 'appCtrl',
        templateUrl: 'templates/users.html',
        url: '/users',
        resolve: {
          data: ['$stateParams','appServices', function($stateParams, appServices) {
            return appServices.getUsers(); 
          }]
        }
      })

      .state('user', {
        url: '/user/id=:id',
        controller: 'usersCtrl',
        templateUrl: 'templates/user.html',
        resolve: {
          data: ['$stateParams', 'appServices', function($stateParams, appServices) {

            return appServices.getUsers($stateParams.id);
          }]
        }
      })

      //
      .state('allPosts', {
        controller: 'postsCtrl',
        templateUrl: 'templates/posts.html',
        url: '/posts',
        resolve: {
          data: ['$stateParams', 'appServices', function($stateParams, appServices) {
            return appServices.getPosts();
          }]
        }
      })

      .state('allUserPosts', {
        controller: 'postsCtrl',
        templateUrl: 'templates/posts.html',
        url: '/posts/userid=:id',
        resolve: {
          data: ['$stateParams', 'appServices', function($stateParams, appServices) {
            return appServices.getPosts({userId: $stateParams.id});
          }]
        }
      })

      .state('singlePost', {
        controller: 'singlePostCtrl',
        templateUrl: 'templates/post.html',
        url: '/posts/:id',
        resolve: {
          data: ['$stateParams', 'appServices', function($stateParams, appServices) {
            return appServices.getPosts({id: $stateParams.id}).then(
              function (result) {
                var post = result;
                return appServices.getUsers($stateParams.id).then(
                  function (result) {
                    post['comments'] = result;
                    console.log('post');
                    return post;
                  },
                  function (error) {
                    console.log(error);
                  }
                );
              },
              function (error) {
                console.log(error);
              }
            );
          }]
        }
      })

      // .state('post', {
      //   controller: 'postCtrl',
      //   templateUrl: 'templates/post.html',
      //   url: '/posts/userid=:id',
      //   resolve: {
      //     data: ['$stateParams', 'appServices', function($stateParams, appServices) {
      //       return appServices.getPosts($stateParams.id);
      //     }]
      //   }
      // })



      //
      .state('album', {
          controller: 'albumCtrl',
          templateUrl: 'templates/album.html',
          url: '/albums/userId=:id',
          resolve: {
            data: ['$stateParams', 'appServices', function($stateParams, appServices) {
              return appServices.getAlbums($stateParams.id).then(
              function (result) {
                var user = result;
                return appServices.getUsers($stateParams.id).then(
                  function (result) {
                    user['user'] = result;
                    return user;
                  },
                  function (error) {
                    console.log(error);
                  }
                );
              },
              function (error) {
                console.log(error);
              }
            );
            }]
          }
      })
      //
      .state('photos', {
          controller: 'photosCtrl',
          templateUrl: 'templates/photos.html',
          url: '/album/photos/id=:id',
          resolve: {
            data: ['$stateParams', 'appServices', function($stateParams, appServices) {
              return appServices.getPhotos($stateParams.id);
            }]
          }

        })
      //
      .state('comments', {
          controller: 'commentsCtrl',
          templateUrl: 'templates/comments.html',
          url: '/comments/userId=:id',
          resolve: {
            data: ['$stateParams', 'appServices', function($stateParams, appServices) {
              console.log("$stateParams : ",$stateParams)
              return appServices.getComments($stateParams.id);
            }]
          }
        })




  }

// })()

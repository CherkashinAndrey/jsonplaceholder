
(function () {

  angular
  .module('app', ['ui.router','slick'] )
  .config(routes)
  .run(run)

  function run ($rootScope, $state, loadingService, allPhotosSliderServices) {
    loadingService.initLoading();
    allPhotosSliderServices.getPhotos();
  }

  function routes ($stateProvider, $urlRouterProvider) {

    

    $urlRouterProvider.otherwise('/users');

    $stateProvider

    .state('slide', {
      controller: 'photosSliderCtrl',
      templateUrl: 'templates/slide.html',
      url: '/slide',
      resolve: {
        data: ['$stateParams','allPhotosSliderServices', function($stateParams, allPhotosSliderServices) {
          return allPhotosSliderServices.getPhotos(1);
        }]
      }
    })

    .state('home', {
      controller: 'usersCtrl',
      templateUrl: 'templates/users.html',
      url: '/users',
      resolve: {
        data: ['$stateParams','usersServices', function($stateParams, usersServices) {
          return usersServices.getUsers();
        }]
      }
    })

    .state('users', {
      controller: 'usersCtrl',
      templateUrl: 'templates/users.html',
      url: '/users',
      resolve: {
        data: ['$stateParams','usersServices', function($stateParams, usersServices) {
          return usersServices.getUsers();
        }]
      }
    })

    .state('user', {
      url: '/user/id=:id',
      controller: 'userCtrl',
      templateUrl: 'templates/user.html',
      resolve: {
        data: ['$stateParams', 'usersServices', function($stateParams, usersServices) {

          return usersServices.getUsers($stateParams.id);
        }]
      }
    })

    .state('allPosts', {
      controller: 'postsCtrl',
      templateUrl: 'templates/posts.html',
      url: '/posts',
      resolve: {
        data: ['$stateParams', 'postServices', function($stateParams, postServices) {
          return postServices.getPosts();
        }]
      }
    })

    .state('allUserPosts', {
      controller: 'postsCtrl',
      templateUrl: 'templates/posts.html',
      url: '/posts/userid=:id',
      resolve: {
        data: ['$stateParams', 'postServices', function($stateParams, postServices) {
          return postServices.getPosts({userId: $stateParams.id});
        }]
      }
    })

    .state('singlePost', {
      controller: 'singlePostCtrl',
      templateUrl: 'templates/post.html',
      url: '/posts/:id',
      resolve: {
        data: ['$stateParams', 'postServices','usersServices', function($stateParams, postServices,usersServices) {
          return postServices.getPosts({id: $stateParams.id}).then(
            function (result) {
              var post = result;
              return usersServices.getUsers($stateParams.id).then(
                function (result) {
                  post['comments'] = result;
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

    .state('album', {
      controller: 'albumCtrl',
      templateUrl: 'templates/album.html',
      url: '/albums/userId=:id',
      resolve: {
        data: ['$stateParams', 'albumsServices' ,'usersServices', function($stateParams, albumsServices, usersServices) {
          return albumsServices.getAlbums($stateParams.id).then(
            function (result) {
              var user = result;
              return usersServices.getUsers($stateParams.id).then(
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

    .state('photos', {
      controller: 'photosCtrl',
      templateUrl: 'templates/photos.html',
      url: '/album/photos/id=:id',
      resolve: {
        data: ['$stateParams', 'photosServices', function($stateParams, photosServices) {
          return photosServices.getPhotos($stateParams.id);
        }]
      }

    })

    .state('allPhotos', {
      controller: 'allPhotosCtrl',
      templateUrl: 'templates/allPhotos.html',
      url: '/photos/',
      resolve: {
        data: ['$stateParams', 'allPhotosServices', function($stateParams, allPhotosServices) {
          return allPhotosServices.getPhotos();
        }]
      }
    })

    .state('testGetPhotos', {
      controller: 'testGetPhotosCtrl',
      templateUrl: 'templates/testGetPhotos.html',
      url: '/photosGet/',
      resolve: {
        data: ['$stateParams', 'testGetPhotosServices', function($stateParams, testGetPhotosServices) {
          return testGetPhotosServices.getPhotos(1);
        }]
      }
    })

    .state('POSTRequest', {
      controller: 'POSTRequestCtrl',
      templateUrl: 'templates/POSTRequest.html',
      url: '/POSTRequest/',
      resolve: {
        data: ['$stateParams', 'POSTRequestServices', function($stateParams, POSTRequestServices) {
          return POSTRequestServices.GetRequest();
        }]
      }
    })

    .state('POSTposts', {
      controller: 'POSTPostsCtrl',
      templateUrl: 'templates/POSTposts.html',
      url: '/POSTPostsRequest/',
      resolve: {
        data: ['$stateParams', 'POSTPostsServices', function($stateParams, POSTPostsServices) {
          return POSTPostsServices.GetRequest();
        }]
      }
    })

    .state('comments', {
      controller: 'commentsCtrl',
      templateUrl: 'templates/comments.html',
      url: '/comments/userId=:id',
      resolve: {
        data: ['$stateParams', 'commentsServices', function($stateParams, commentsServices) {
          return commentsServices.getComments($stateParams.id);
        }]
      }
    })

    .state('convertCurrency', {
      controller: 'convertCurrencyCtrl',
      templateUrl: 'templates/convertCurrency.html',
      url: '/convertCurrency',
      resolve: {
        data: ['$stateParams','convertCurrencyServices', function($stateParams, convertCurrencyServices) {
          return convertCurrencyServices.getConvertCurrency();
        }]
      }
    })

  }

})()


var app = angular.module('app', ['ui.router']);
var objUrl = {
                section: 'users',
                el: 'userId',
                el_id: '',
             }

app.constant('URL', 'http://jsonplaceholder.typicode.com/'+ objUrl.section+ "?" + objUrl.el + "=" + objUrl.el_id);
//url: ROOT_URL + obj.section+ "?" + obj.el + "=" + obj.el_id

app.factory('getDataService', function($http, URL) {
    return {
        getCurrencyRate: function() {
            return $http({
                        method : "GET",
                        url : URL
                    })
        }
    }
});

app.controller('Controller', function($scope, getDataService) {
    $scope.jsonData = [];
    $scope.userID = null;
    $scope.swowList = true;
    
    getDataService.getCurrencyRate().then(function (response) {
        $scope.jsonData = response.data;
    });

    $scope.allInfoUsers = function($event, element) {
        // var obj = {
        //   section: 'posts',
        //   el: 'userId',
        //   el_id: element,
        // }
        $scope.userID = element;
        $scope.swowList = false;
    }
    $scope.posts = function($event, element) {
        // objUrl = {
        //   section: 'posts',
        //   el: 'userId',
        //   el_id: element,
        // }

        // $scope.jsonData = func(objUrl);

        // $scope.swowList = false;
    }

   function func(objUrl) {
      $http({method : "GET",
            url : 'http://jsonplaceholder.typicode.com/'+ objUrl.section+ "?" + objUrl.el + "=" + objUrl.el_id
      })
      .then(function (response) {
        return response.data;
       });
    }


});

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/user');
    $stateProvider

        .state('user', {
            url: '/user',
            templateUrl: 'templates/user.html'
        })
        
        .state('users', {
            url: '/users',
            templateUrl: 'templates/allInfoUser.html'      
        })

        .state('post', {
            url: '/post',
            templateUrl: 'templates/post.html'      
        })

        .state('album', {
            url: '/album',
            templateUrl: 'templates/album.html'      
        })

        .state('photos', {
            url: '/album/photos',
            templateUrl: 'templates/photos.html'      
        })

        .state('comments', {
            url: '/post/comments',
            templateUrl: 'templates/comments.html'      
        })
        
});

/*
app.directive("usersInfo", function () {
    return {
      link: function (scope, element, attrs) {
        
      },
      restrict: 'A',
      templateUrl:  "templates/user.html",
    }
})


app.directive("allUsersInfo", function () {
    return {
      link: function (scope, element, attrs) {
        
      },
      restrict: 'A',
      templateUrl:  "templates/post.html",
    }
})

*/
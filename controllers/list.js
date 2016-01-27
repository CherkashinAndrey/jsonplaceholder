
var app = angular.module('app', []);

app.constant('URL', 'http://jsonplaceholder.typicode.com/users');

URLs = {
    ROOT: '',
    POSTS:'',
    COMMENTS:'',
    ALBUMS:'',
    PHOTOS:'',
    TODOS:'',
    USERS:'',
}

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
        debugger
        $scope.userID = element;
        $scope.swowList = false;
    }
});

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
      templateUrl:  "templates/allInfoUser.html",
    }
})
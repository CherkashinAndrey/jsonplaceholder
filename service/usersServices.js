
(function() {

  angular
    .module('app')
    .service('usersServices', usersServices)
    .constant('URL', 'http://jsonplaceholder.typicode.com/');

  function usersServices($http, URL) {
    return {
      getUsers: function(id) {
        return $http({
          method: 'GET',
          url: URL + 'users',
          params: {
            id: id
          }
        }).then(
          function (result) {
            return result;
          },
          function (error) {
            console.log(error);
          }
        );
      },
    }
  }

})();

(function() {

  angular
  .module('app')
  .service('usersServices', usersServices)
  .constant('URL_USERS', 'http://jsonplaceholder.typicode.com/users');

  function usersServices($http, URL_USERS) {
    return {
      getUsers: function(id) {
        return $http({
          method: 'GET',
          url: URL_USERS,
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

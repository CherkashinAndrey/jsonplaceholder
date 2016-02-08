(function() {

  angular
    .module('app')
    .service('POSTRequestServices', POSTRequestServices)
    .constant('ROOT', 'http://localhost:3001/');

  function POSTRequestServices($http, ROOT) {
    return {
      GetRequest: function() {
        return $http({
          method: 'GET',
          url: ROOT + 'books'
        }).then(
          function (result) {
            return result;
          },
          function (error) {
            console.log(error);
          }
        );
      },

      PostRequest: function(book, scope) {
        return $http.post('http://localhost:3001/books',book)
       .then(function (result) {
          scope.books.push(book);
          scope.book = null;
       }),
         function (result) {
         console.log('error in book POST');
       }
      }


    }
  }

})();


(function() {

  angular
    .module('app')
    .controller('POSTRequestCtrl', POSTRequestCtrl);

  function POSTRequestCtrl($scope, data, POSTRequestServices, $http) {
  	 $scope.books = data.data;

  	 $scope.addBook = function(book) {
  	 	POSTRequestServices.PostRequest(book, $scope);
  	 }


  }

})();
